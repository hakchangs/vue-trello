<template>
  <div class="list-item">
    <div class="head">
      <div v-show="!edit" class="title handle">
        <div @click="showEdit">{{ titleText }}</div>
        <button @click="remove">삭제</button>
      </div>
      <input
        v-show="edit"
        @blur="hideEdit"
        @keyup.enter="hideEdit"
        v-model="titleText"
        type="text"
        class="title"
        ref="title"
      />
    </div>
    <div class="content">
      <div class="card-list" :data-list-id="id">
        <CardItem
          v-for="(card,index) in cards"
          v-bind:key="index"
          :id="card.id"
          :title="card.title"
          :description="card.description"
          @refresh="refresh"
          :data-id="card.id"
          :data-pos="card.pos"
          :data-list-id="id"
        ></CardItem>
      </div>
    </div>
    <div class="foot">
      <CardAdd @add="addCard"></CardAdd>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import CardAdd from "../card/CardAdd"
import CardItem from "../card/CardItem"

export default {
  components: { CardAdd, CardItem },
  props: {
    id: { type: Number, default: null },
    title: { type: String, default: "" },
    cards: { type: Array, default: null },
  },
  data() {
    return {
      edit: false,
      titleText: "",
    }
  },
  mounted() {
    this.titleText = this.title
  },
  watch: {
    title() {
      this.titleText = this.title
    },
  },
  methods: {
    ...mapActions({
      modifyItem: "list/MODIFY_ITEM",
      removeItem: "list/REMOVE_ITEM",
      addCardItem: "card/ADD_ITEM",
    }),
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
      const id = this.id
      const title = this.titleText
      const change = { title }
      this.modifyItem({ id, change })
    },
    async remove() {
      await this.removeItem(this.id)
      this.$emit("refresh")
    },
    async addCard(title) {
      const listId = this.id
      await this.addCardItem({ title, listId })
      this.$emit("refresh")
    },
    refresh() {
      this.$emit("refresh")
    },
  },
}
</script>

<style>
.list-item {
  border-radius: 5px;
  background: #ccc;
  margin: 0 0.5rem 0 0;
  padding: 0.5rem 1rem;
  width: 18rem;
  height: fit-content;
  text-align: left;
}
.list-item .head {
}
.list-item .head .title {
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-item .head input {
  width: 100%;
  padding: 5px;
}
.list-item .content {
  /* margin: 0 0 5px; */
}
.list-item .foot {
  /* margin-top: 5px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.card-list {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>