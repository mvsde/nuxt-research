<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 1em;
  padding: 1em;

  background: #fff;
  border-radius: 0.25em;
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.2);
}
</style>
