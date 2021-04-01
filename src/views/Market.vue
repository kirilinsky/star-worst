<template>
  <vs-card-group>
    <vs-card>
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img :src="`/foto${card}.png`" alt="" />
      </template>
      <template #text>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class="bx bx-heart"></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class="bx bx-chat"></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  </vs-card-group>
</template>

<script>

import { getUnits } from '@/services/api/connections'

  created() {
  getUnits().then(res=>console.log(res.data)).catch(err => {
        this.openNotification('bottom-right', 'rgb(255, 71, 87)', 'Ошибка регистрации!', 'Ну и дела... Перепроверь все и давай снова!')
      })


}
</script>
