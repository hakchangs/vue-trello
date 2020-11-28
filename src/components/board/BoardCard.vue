<template>
  <div class="board-card" :style="`background: ${this.bgColor};`" @click="select">
    <h2 class="title">{{ title }}</h2>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: 0 },
    title: { type: String, default: "" },
    bgColor: { type: String, default: "" },
  },
  methods: {
    select() {
      this.$emit("selected", this.id)
    },
  },
}
</script>

<style>
.board-card {
  display: inline-grid;
  width: 10rem;
  min-height: 5rem;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}
.board-card .title {
  color: white;
}
</style>