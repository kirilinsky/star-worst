<template>
  <div class="item">
    {{ baseUnit.name }}
    <button @click="tryToSellUnit(unit.id)" title="продать" class="item-sell">
      &times;
    </button>
  </div>
</template>

<script>
import { getUnit, sellUnit } from "@/services/api/connections";
import notificationsMixin from "@/mixins/notifications.mixin";

export default {
  data: () => ({
    baseUnit: {},
  }),
  props: {
    unit: {
      type: Object,
    },
  },
  mixins: [notificationsMixin],
  methods: {
    tryToSellUnit(id) {
      const token = localStorage.getItem("token");
      sellUnit(id, token)
        .then((res) => {
          this.openNotification(
            "bottom-right",
            "rgb(70, 201, 58)",
            "Нормас",
            res.data.message
          );
          this.$store.dispatch("setUserInfo");
        })
        .catch((err) =>
          this.openNotification(
            "bottom-right",
            "rgb(255, 71, 87)",
            "Ошибка продажи!",
            err.response.data.message
          )
        );
    },
  },
  created() {
    getUnit(this.unit.id).then((x) => {
      this.baseUnit = x.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 460px;
  background: #ccc;
  margin: 3px;
  padding: 11px;
  position: relative;
  &-sell {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    right: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
  }
}
</style>
