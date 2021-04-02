<template>
  <div class="units">
    <div class="unit" v-for="unit in units" :key="unit._id">
      <div class="unit-info">
        <div class="unit-info__item">
          <img
            class="unit-info__image"
            src="@/assets/icons/full-hp.svg"
            alt="Иконка: здоровье"
          />
          <span class="unit-info__text">Здоровье: {{ unit.health }}</span>
        </div>
        <div class="unit-info__item">
          <img
            class="unit-info__image"
            src="@/assets/icons/damage.svg"
            alt="Иконка: урон"
          />
          <span class="unit-info__text">Урон: {{ unit.damage }}</span>
        </div>
      </div>
      <div class="unit-image">
        <img class="unit__photo" :src="unit.img" :alt="unit.name" />
      </div>
      <h3 class="unit__name">{{ unit.name }}</h3>
      <p class="unit__description">{{ unit.description }}</p>
      <span>sold count is: {{ unit.soldCount }}</span>
      <vs-button
        class="button login__button"
        transparent
        v-if="login"
        :active="active == 0"
        @click="tryToBuyUnit(unit._id)"
      >
        Купить за {{ unit.price }} ₿
      </vs-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { buyUnit } from "@/services/api/connections";
import notificationsMixin from "@/mixins/notifications.mixin";

export default {
  props: {
    units: {
      type: Array,
      required: true,
    },
  },
  mixins: [notificationsMixin],
  computed: {
    ...mapGetters({ login: "getUserLogged", active: "getActive" }),
  },
  methods: {
    tryToBuyUnit(id) {
      const token = localStorage.getItem("token");
      buyUnit(id, token)
        .then((res) => {
          this.openNotification(
            "bottom-right",
            "rgb(70, 201, 58)",
            "Персонаж приобретен, поздравляю!",
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
};
</script>
