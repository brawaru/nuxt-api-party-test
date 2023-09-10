<script setup lang="ts">
const { data: lastUpdated } = await useModrinthData('search', {
  query: {
    limit: 10,
    query: '',
    index: 'updated',
  },
  transform: ({ hits }) => hits,
});
</script>

<template>
  <ul>
    <li v-for="project in lastUpdated">
      <div>
        <strong>{{ project.title }}</strong>
      </div>
      <div>{{ project.description }}</div>
    </li>
  </ul>
</template>
