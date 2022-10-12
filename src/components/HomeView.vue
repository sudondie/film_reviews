<template>
  <div>
    <HeaderView/>
    <div v-for="review in reviews" :key="review.id">
      {{review.filmName}} <br>
      {{review.grade}}
    </div>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue';
export default {
  data() {
    return {
      reviews: [],
    }
  },
  components: {
    HeaderView,
  },
  mounted() {
    this.reviews = JSON.parse(localStorage.getItem('reviews'));
  }
}
</script>

<style>

</style>
