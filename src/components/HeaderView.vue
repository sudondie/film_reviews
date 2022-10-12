<template>
  <div>
    <header class="header">
      <h4>Список фильмов</h4>
      <button @click="addNewFilm()">
        Добавить фильм
      </button>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    addNewFilm() {
      this.$router.push('/newFilm');
    }
  }
}
</script>

<style>
.header {
  background-color: dodgerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 50px;

}
.header h4 {
  margin: 0;
  text-transform: uppercase;
  font-size: 20px;
}
.header button {
  background-color: blue;
  border-radius: 5px;
  border: 1px solid #0000FFFF;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  transition: 0.3s;
}
.header button:hover {
  background-color: #0000c9;
}
</style>
