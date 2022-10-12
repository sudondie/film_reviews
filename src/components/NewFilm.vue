<template>
  <div>
    <HeaderView/>
    <div class="form">
      <label
        for="filmName"
        id="filmName"
      >
        Название фильма
      </label>
      <input
        type="text"
        name="filmName"
        v-model="filmName"
      >
      <label
        for="genre"
        id="genre"
      >
        Жанр
      </label>
      <select name="genre" v-model="genre">
        <option v-for="genre in genreList" :key="genre.id">
          {{genre}}
        </option>
      </select>
      <label
        for="grade"
        id="grade"
      >
        Оценка: <strong>{{grade}}</strong>
      </label>
      <input type="range" name="grade" min="1" max="10" v-model="grade">
      <label
        for="review"
        id="review"
      >
        Отзыв
      </label>
      <textarea name="review" v-model="review" placeholder="Напишите свой отзыв"/>
      <button class="form_button" @click="sendReview()">
        Оставить отзыв
      </button>
    </div>
  </div>
</template>
<script>
import HeaderView from './HeaderView.vue';
export default {
  data() {
    return {
      filmName: '',
      genre: '',
      review: '',
      genreList: ['Ужасы', 'Комедия', 'Боевик', 'Слешер'],
      grade: '',
    }
  },
  components: {
    HeaderView,
  },
  methods: {
    sendReview() {
        const review = {
          filmName: this.filmName,
          genre: this.genre,
          review: this.review,
          grade: this.grade
        }
        let reviews = JSON.parse(localStorage.getItem('reviews'));
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }
  },
  mounted() {
    if (!JSON.parse(localStorage.getItem('reviews'))) {
      localStorage.setItem('reviews', JSON.stringify([]))
    }
  }
}
</script>
<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form textarea, select, input {
  margin-bottom: 10px;
  width: 400px;
}
.form button {
  background-color: blue;
  border-radius: 5px;
  border: 1px solid #0000FFFF;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  width: 400px;
  transition: 0.3s;
}
.form button:hover {
  background-color: #0000c9;
}
</style>
