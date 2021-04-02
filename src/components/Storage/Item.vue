<template>
  <div class="storage-profile-item">
    {{ unit.id }}
  </div>
</template>

<script>
export default {
  props: {
    unit: {
      type: Object,
    },
  },
};
</script>
