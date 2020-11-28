<template>
  <div class="list-item">
    <div v-show="!edit" @click="showEdit" class="list-add">+ 리스트 추가</div>
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
        <button @click="add">리스트 추가</button>
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
.list-add {
  cursor: pointer;
}
</style>