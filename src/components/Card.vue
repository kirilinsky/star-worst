<template>
  <div class="units">
    <div class="unit" v-for="unit in units" :key="unit._id">
      <div class="unit-info">
        <div class="unit-info__item">
          <img class="unit-info__image" src="@/assets/icons/full-hp.svg" alt="Иконка: здоровье">
          <span class="unit-info__text">Здоровье: {{ unit.health }}</span>
        </div>
        <div class="unit-info__item">
          <img class="unit-info__image" src="@/assets/icons/damage.svg" alt="Иконка: урон">
          <span class="unit-info__text">Урон: {{ unit.damage }}</span>
        </div>
      </div>
      <div class="unit-image">
        <img class="unit__photo" :src="unit.img" :alt="unit.name">
      </div>
      <h3 class="unit__name">{{ unit.name }}</h3>
      <p>{{ unit.description }}</p>

      <vs-button
        class="button login__button"
        transparent
        v-if="!login"
        :active="active == 0"
      >
        Купить бойца
      </vs-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    units: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({ login: "getUserLogged", active: "getActive" })
  }
}
</script>