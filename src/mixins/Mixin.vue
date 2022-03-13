<script>
/* eslint-disable */
export default {
  data() {
    return {
      imgPath: "https://click.ecc.ac.jp/ecc/msatou/cocotabe/img/",
      productsData: "https://click.ecc.ac.jp/ecc/msatou/products/cocotabe.php",
      innerH: 0,
    };
  },
  mounted() {
    this.innerH = window.innerHeight;
    setTimeout(() => {
      this.$_setLoadFlag(false);
    }, 1500);
  },
};
</script>
