<template>
  <div v-if="baseUnit" class="unit-page">
    Страница юнита {{ baseUnit.name }}
    <div class="perks">
      <h3>Способности:</h3>
      <div class="perk" v-for="perk in perks" :key="perk._id">
        <img class="perk__image" :src="perk.img" :alt="perk.name" />
        <span>{{ perk.name }}</span>
        <vs-button
          class="button login__button"
          :active="active == 0"
          @click="tryToBuyPerk(perk._id)"
        >
          купить за {{ perk.price }} кпм
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUnit, getAllPerks, buyPerk } from "@/services/api/connections";
import notificationsMixin from "@/mixins/notifications.mixin";

export default {
  data: () => ({
    baseUnit: null,
    perks: null,
  }),
  mixins: [notificationsMixin],
  methods: {
    tryToBuyPerk(perkId) {
      const unitId = this.$route.params.id;
      buyPerk(unitId, perkId, localStorage.getItem("token"))
        .then((res) => {
          this.openNotification(
            "bottom-right",
            "rgb(70, 201, 58)",
            "Успешно куплено, поздравляю!",
            res.data.message
          );
          this.$store.dispatch("setUserInfo");
        })
        .catch((err) =>
          this.openNotification(
            "bottom-right",
            "rgb(255, 71, 87)",
            "Ошибка покупки!",
            err.response.data.message
          )
        );
    },
  },
  created() {
    getUnit(this.$route.params.id)
      .then((x) => {
        this.baseUnit = x.data;
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
    getAllPerks(this.$route.params.id)
      .then((x) => {
        this.perks = x.data;
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  },
};
</script>

<style lang="scss" scoped>
.perks {
  display: flex;
}
.perk {
  width: 129px;
  height: 190px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin: 16px;
  background: #ccc;
  padding: 3px 9px;
  border-radius: 3px;
  transition: all 0.3s linear;
  color: #000;
  &:hover {
    cursor: pointer;
    transform: translateY(3px);
  }
  &__image {
    max-height: 60%;
    max-width: 100%;
  }
}
</style>
