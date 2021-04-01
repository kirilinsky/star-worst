export default {
  methods: {
    openNotification(position = null, color, title, text) {
      const noti = this.$vs.notification({
        progress: "auto",
        color,
        position,
        title,
        text,
      });
    },
  }
}