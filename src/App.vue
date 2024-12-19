<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
    setTimeout(() => {
      window.parent?.postMessage({ action: 'on-code-ok' }, '*');
    }, 5000);
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
@import "@/uni_modules/vk-uview-ui/index.scss";
</style>