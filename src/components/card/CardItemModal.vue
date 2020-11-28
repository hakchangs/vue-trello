<template>
  <div class="card-item-modal">
    <div class="head">
      <div v-show="!titleEdit" @click="showTitleEdit">
        <p>{{ titleText }}</p>
      </div>
      <div v-show="titleEdit">
        <input
          v-model="titleText"
          @blur="hideTitleEdit"
          @keyup.enter="modifyTitle"
          type="text"
          ref="title"
        />
      </div>
      <div class="head-button">
        <button @click="remove">삭제</button>
        <button @click="close">닫기</button>
      </div>
    </div>
    <div class="body">
      <div v-show="!descEdit" @click="showDescEdit" class="description">
        <p>{{ descText }}&nbsp;</p>
      </div>
      <div v-show="descEdit" class="description">
        <textarea
          v-model="descText"
          @blur="hideDescEdit"
          @keyup.enter="modifyDesc"
          type="text"
          ref="desc"
          rows="5"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: 0 },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  data() {
    return {
      titleText: "",
      titleEdit: false,
      descText: "",
      descEdit: false,
    }
  },
  mounted() {
    this.titleText = this.title
    this.descText = this.description
  },
  watch: {
    title() {
      this.titleText = this.title
    },
    description() {
      this.descText = this.description
    },
  },
  methods: {
    close() {
      this.$emit("close")
    },
    modify(change) {
      this.$emit("modify", change)
    },
    modifyTitle() {
      this.modify({ title: this.titleText })
      this.hideTitleEdit()
    },
    modifyDesc() {
      if (event.ctrlKey) {
        this.modify({ description: this.descText })
        this.hideDescEdit()
      }
    },
    remove() {
      this.$emit("remove")
      this.close()
    },
    showTitleEdit() {
      this.$refs.title.focus()
      this.$refs.title.select()
      this.titleEdit = true
    },
    hideTitleEdit() {
      this.titleEdit = false
    },
    showDescEdit() {
      this.$refs.desc.focus()
      this.$refs.desc.select()
      this.descEdit = true
    },
    hideDescEdit() {
      this.descEdit = false
    },
  },
}
</script>

<style>
.card-item-modal {
  padding: 1rem;
}
.card-item-modal .head {
  width: 80%;
}
.card-item-modal .head-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.card-item-modal .body {
  padding: 1rem 0;
}
.card-item-modal .body .description {
  min-height: 5rem;
  background: grey;
}
.card-item-modal .body .description textarea {
  font-size: 1rem;
  width: 100%;
  height: 100%;
}
</style>