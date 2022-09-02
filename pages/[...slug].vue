<template>
  <main :data-sb-object-id="page.__id">
    <h1 data-sb-field-path="title">{{ page.title }}</h1>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(() =>
  $fetch('/api/page', {
    method: 'post',
    body: '/' + ([...route.params.slug] || []).join('/'),
  })
);
</script>
