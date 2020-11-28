import store from "../../../src/store"

describe.skip("store.list", () => {
  beforeAll(async () => {
    //로그인
    const user = { email: "test@test.com", password: "123123" }
    await store.dispatch("auth/LOGIN", user)
  })
  test("추가", async () => {
    const newList = {
      title: "리스트1",
      boardId: 1,
      pos: "eng",
    }
    await store.dispatch("list/ADD_ITEM", newList)
    const item = store.state.list.item
    console.log("item=", item)
    expect(item).not.toBeNull()
  })
  test("변경", async () => {
    const id = 9
    const change = { title: "리스트222" }
    await store.dispatch("list/MODIFY_ITEM", { id, change })
    const item = store.state.list.item
    expect(item).not.toBeNull()
  })
  test("삭제", async () => {
    const id = 9
    await store.dispatch("list/REMOVE_ITEM", id)
    const item = store.state.list.item
    expect(item).toBeNull()
  })
})
