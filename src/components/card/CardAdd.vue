<template>
  <div class="card-add-item">
    <div v-show="!edit" @click="showEdit" class="card-add">+ 카드 추가</div>
    <div v-show="edit">
      <div class="head">
        <input
          @blur="hideEdit"
          @keyup.enter="add"
          v-model="title"
          type="text"
          class="title"
          ref="title"
        />
      </div>
      <div class="foot">
        <button @click="add">카드 추가</button>
        <button @click="hideEdit">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      title: "",
    }
  },
  methods: {
    showEdit() {
      this.edit = true
      const el = this.$refs.title
      this.$nextTick(() => {
        el.focus()
        el.select()
      })
    },
    hideEdit() {
      this.edit = false
    },
    add() {
      this.$emit("add", this.title)
      this.title = ""
    },
  },
}
</script>

<style>
.card-add-item {
  border-radius: 5px;
  background: transparent;
  width: 100%;
  text-align: left;
}
.card-add {
  cursor: pointer;
  margin-bottom: 0.5rem;
}
</style>