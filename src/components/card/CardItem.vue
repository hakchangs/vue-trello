<template>
  <div class="card-item">
    <div @click="show">
      <div class="head">
        <div class="title">
          <div>{{ titleText }}</div>
        </div>
      </div>
      <div class="content"></div>
      <div class="foot"></div>
    </div>
    <modal :name="`card-item-modal-${id}`">
      <CardItemModal
        @close="hide"
        @remove="remove"
        @modify="modify"
        @refresh="refresh"
        :title="title"
        :description="description"
      ></CardItemModal>
    </modal>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import CardItemModal from "./CardItemModal"

export default {
  components: { CardItemModal },
  props: {
    id: { type: Number, default: null },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  data() {
    return {
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
      modifyItem: "card/MODIFY_ITEM",
      removeItem: "card/REMOVE_ITEM",
    }),
    async modify(change) {
      const id = this.id
      await this.modifyItem({ id, change })
      this.$emit("refresh")
    },
    async remove() {
      await this.removeItem(this.id)
      this.$emit("refresh")
    },
    refresh() {
      this.$emit("refresh")
    },
    show() {
      this.$modal.show(`card-item-modal-${this.id}`)
    },
    hide() {
      this.$modal.hide(`card-item-modal-${this.id}`)
    },
  },
}
</script>

<style>
.card-item {
  border-radius: 5px;
  background: #fff;
  width: 100%;
  text-align: left;
}
.card-item:not(:first-child) {
  margin-top: 0.5rem;
}
.card-item .head {
}
.card-item .head .title {
  width: 100%;
  padding: 5px;
  cursor: pointer;
}
.card-item .content {
  margin: 5px 0;
}
.card-item .foot {
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>