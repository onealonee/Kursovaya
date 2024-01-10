<template>
  <div id="app">
    <header>
      <h1>Информационная Система Поиска Товаров в Гипермаркетах</h1>
    </header>
    <main>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Поиск товаров...">
        <button @click="search">Искать</button>
      </div>
      <div class="search-results">
        <h2>Результаты поиска</h2>
        <ul>
          <li v-for="(product, index) in searchResults" :key="index">{{ product.name }}</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [
        { name: 'Продукт 1' },
        { name: 'Продукт 2' },
        { name: 'Продукт 3' },
        // Здесь могут быть данные из вашей информационной системы
      ],
    };
  },
  methods: {
    search() {
      // Здесь добавьте логику поиска товаров в гипермаркетах
      console.log('Поиск:', this.searchQuery);
      // Можете также обращаться к вашему серверу или локальным данным
    },
  },
};
</script>

<style>
/* Добавьте стили для вашего приложения, используя Bootstrap или свои собственные стили */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #007bff;
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.search-bar {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.search-bar input {
  flex: 1;
  padding: 0.5rem;
}

.search-results ul {
  list-style-type: none;
  padding: 0;
}

.search-results li {
  margin-bottom: 0.5rem;
}
</style>
