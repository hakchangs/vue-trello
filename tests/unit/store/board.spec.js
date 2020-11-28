import store from "../../../src/store"

describe.skip("store.board", () => {
  beforeAll(async () => {
    //로그인
    const user = { email: "test@test.com", password: "123123" }
    await store.dispatch("auth/LOGIN", user)
  })
  test("리스트", async () => {
    await store.dispatch("board/FETCH_LIST")
    const list = store.state.board.list
    console.log("list=", list)
    expect(list).not.toBeNull()
  })
  test("상세", async () => {
    const id = 1
    await store.dispatch("board/FETCH_ITEM", id)
    const board = store.state.board.item
    console.log("board=", board)
    expect(board).not.toBeNull()
  })
  test("추가", async () => {
    const newBoard = { title: "Sample Board222" }
    await store.dispatch("board/ADD_ITEM", newBoard)
    const board = store.state.board.item
    console.log("board=", board)
    expect(board).not.toBeNull()
  })
  test("변경", async () => {
    const id = 3
    const change = { title: "Sample Board2!" }
    await store.dispatch("board/MODIFY_ITEM", { id, change })
    const board = store.state.board.item
    console.log("board=", board)
    expect(board).not.toBeNull()
  })
  test("삭제", async () => {
    const id = 3
    await store.dispatch("board/REMOVE_ITEM", id)
    const board = store.state.board.item
    expect(board).toBeNull()
  })
})
