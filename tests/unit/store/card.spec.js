import store from "../../../src/store"

describe.skip("store.card", () => {
  beforeAll(async () => {
    //로그인
    const user = { email: "test@test.com", password: "123123" }
    await store.dispatch("auth/LOGIN", user)
  })
  test("추가", async () => {
    const newCard = {
      title: "Sample Board222",
      listId: 5,
      pos: "ㅇㅇ",
    }
    await store.dispatch("card/ADD_ITEM", newCard)
    const item = store.state.card.item
    console.log("item=", item)
    expect(item).not.toBeNull()
  })
  test("상세", async () => {
    const id = 2
    await store.dispatch("card/FETCH_ITEM", id)
    const item = store.state.card.item
    console.log("item=", item)
    expect(item).not.toBeNull()
  })
  test("변경", async () => {
    const id = 2
    const change = { title: "Card-1 !" }
    await store.dispatch("card/MODIFY_ITEM", { id, change })
    const item = store.state.card.item
    console.log("item=", item)
    expect(item).not.toBeNull()
  })
  test("삭제", async () => {
    const id = 2
    await store.dispatch("card/REMOVE_ITEM", id)
    const item = store.state.card.item
    console.log("item=", item)
    expect(item).toBeNull()
  })
})
