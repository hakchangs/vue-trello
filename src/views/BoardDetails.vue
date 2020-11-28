<template>
  <div class="board-details-view" :style="`background: ${this.bgColor}; overflow-x: scroll;`">
    <div style="display: flex; align-items: center;">
      <h1 style="text-align: left;">{{ title }}</h1>
      <button @click="removeBoard">삭제</button>
    </div>
    <div style="display: flex;">
      <div style="display: flex;" ref="lists">
        <ListItem
          v-for="(l, index) in lists"
          v-bind:key="index"
          :id="l.id"
          :title="l.title"
          :pos="l.pos"
          :createdAt="l.createdAt"
          :updatedAt="l.updatedAt"
          :cards="l.cards"
          @refresh="refresh"
          :data-id="l.id"
          :data-pos="l.pos"
        ></ListItem>
      </div>
      <div>
        <ListAdd @add="addList"></ListAdd>
      </div>
    </div>
    <!-- <div>{{board}}</div> -->
  </div>
</template>

<script>
import dragula from "dragula"
import "dragula/dist/dragula.css"
import { mapActions, mapState } from "vuex"

import ListItem from "../components/list/ListItem"
import ListAdd from "../components/list/ListAdd"

export default {
  components: { ListItem, ListAdd },
  data() {
    return {
      boardId: null,
      isMouseDown: false,
      startX: 0,
      scrollLeft: 0,
    }
  },
  computed: {
    ...mapState({
      board: (state) => state.board.item,
    }),
    bgColor() {
      if (!this.board) return ""
      return this.board.bgColor
    },
    title() {
      if (!this.board) return ""
      return this.board.title
    },
    lists() {
      if (!this.board) return ""
      return this.board.lists
    },
  },
  mounted() {
    const { id } = this.$route.params
    this.boardId = id
    this.refresh()
    this.setMousemove()
    this.setListDragable()
  },
  updated() {
    this.setCardDragable()
  },
  methods: {
    ...mapActions({
      fetchBoardItem: "board/FETCH_ITEM",
      removeBoardItem: "board/REMOVE_ITEM",
      addListItem: "list/ADD_ITEM",
      modifyListItem: "list/MODIFY_ITEM",
      modifyCardItem: "card/MODIFY_ITEM",
    }),
    async addList(title) {
      const item = { title, boardId: this.boardId, pos: 4444 }
      await this.addListItem(item)
      await this.refresh()
    },
    async refresh() {
      await this.fetchBoardItem(this.boardId)
    },
    setListDragable() {
      const el = this.$refs.lists
      this.$nextTick(() => {
        const drake = dragula([el], {
          moves: function (el, container, handle) {
            console.log("el=", el)
            console.log("container=", container)
            console.log("handle=", handle)
            return handle.classList.contains("handle")
          },
        })
        drake.on("drop", () => {
          const all = Array.from(el.querySelectorAll(".list-item"))
          all.forEach((e, index) => {
            const id = e.dataset.id
            const pos = index + 1
            const change = { pos }
            this.modifyListItem({ id, change })
          })
        })
        console.log("drake=", drake)
      })
    },
    setCardDragable() {
      this.$nextTick(() => {
        const el = Array.from(this.$el.querySelectorAll(".card-list"))
        const drake = dragula([...el])
        drake.on("drop", (el, target, source, sibling) => {
          console.log("el=", el)
          console.log("target=", target)
          console.log("source=", source)
          console.log("sibling=", sibling)

          const all = Array.from(this.$el.querySelectorAll(".card-item"))
          all.forEach((e, index) => {
            const id = e.dataset.id
            const pos = index + 1
            const isTargetEl = e === el
            const listId = isTargetEl ? target.dataset.listId : e.dataset.listId
            const change = { pos, listId }
            console.log({ id, change })
            this.modifyCardItem({ id, change })
          })
        })
      })
    },
    async removeBoard() {
      await this.removeBoardItem(this.boardId)
      this.$router.push({ path: "/board" })
    },
    setMousemove() {
      const slider = this.$el

      //드래그 시작위치 파악하기
      slider.addEventListener("mousedown", (e) => {
        this.isMouseDown = true
        this.startX = e.pageX - slider.offsetLeft
        this.scrollLeft = slider.scrollLeft
      })

      slider.addEventListener("mouseleave", () => {
        this.isMouseDown = false
      })
      slider.addEventListener("mouseup", () => {
        this.isMouseDown = false
      })
      //드래그한 거리 스크롤로 전환하기
      slider.addEventListener("mousemove", (e) => {
        if (!this.isMouseDown) return

        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - this.startX) * 1
        slider.scrollLeft = this.scrollLeft - walk
      })
    },
  },
}
</script>

<style>
.board-details-view {
  width: 100%;
  height: 100%;
  padding: 2rem;
}
.board-details-view h1 {
  color: white;
  margin: 0 0 1rem;
}
</style>