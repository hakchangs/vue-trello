<template>
  <div class="board-card board-add-item">
    <div v-show="!edit" @click="showEdit" class="board-add">+ 보드 추가</div>
    <div v-show="edit">
      <input v-model="title" @blur="hideEdit" @keyup.enter="add" type="text" ref="title" />
      <button @click="add">+ 보드 추가</button>
      <button @click="hideEdit">취소</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      edit: false,
      title: "",
    }
  },
  methods: {
    ...mapActions({
      addItem: "board/ADD_ITEM",
    }),
    showEdit() {
      this.edit = true
      this.$refs.title.focus()
      this.$refs.title.select()
    },
    hideEdit() {
      this.edit = false
    },
    async add() {
      const newBoard = { title: this.title }
      await this.addItem(newBoard)
      this.title = ""
      this.$emit("refresh")
    },
  },
}
</script>

<style>
.board-add-item {
  background: grey;
}
.board-add {
  cursor: pointer;
}
</style>