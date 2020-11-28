<template>
  <div class="board-view">
    <h1>보드 리스트</h1>
    <div style="display: inline-flex;">
      <BoardCard
        v-for="(b, index) in boards"
        v-bind:key="index"
        :id="b.id"
        :title="b.title"
        :bgColor="b.bgColor"
        @selected="selected"
      ></BoardCard>
      <BoardAdd @refresh="refresh"></BoardAdd>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import BoardCard from "../components/board/BoardCard"
import BoardAdd from "../components/board/BoardAdd"

export default {
  components: { BoardCard, BoardAdd },
  computed: {
    ...mapState({
      boards: (state) => state.board.list,
    }),
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    ...mapActions({
      fetchList: "board/FETCH_LIST",
    }),
    selected(id) {
      this.$router.push({ path: `board/${id}` })
    },
    refresh() {
      this.fetchList()
    },
  },
}
</script>

<style>
.board-view {
  margin-top: 10rem;
}
</style>