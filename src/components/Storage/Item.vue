<template>
  <div class="item">
    <img class="item__image" :src="baseUnit.img" :alt="baseUnit.name">
    <h3 class="item__name">{{ baseUnit.name }}</h3>
    <button @click="tryToSellUnit(unit.id)" title="Продать" class="item-sell">
      &times;
    </button>
    
    <div class="item-info">
      <div class="item-info__block">
        <img
          class="item-info__image"
          src="@/assets/icons/damage.svg"
          alt="Иконка: урон"
        />
        <span class="item-info__text">Урон: {{ baseUnit.damage }}</span>
      </div>

      <div class="item-info__block">
        <img
          class="item-info__image"
          src="@/assets/icons/full-hp.svg"
          alt="Иконка: здоровье"
        />
        <span class="item-info__text">Здоровье: {{ baseUnit.health }}</span>
      </div>
    </div>

    <router-link :to="/unit/ + baseUnit._id">Подробнее</router-link>

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
        )
    },
  },
  created() {
    getUnit(this.unit.id).then(x => { this.baseUnit = x.data })
  },
};
</script>
