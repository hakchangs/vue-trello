import authApi from "../../../src/api/auth"
import cardApi from "../../../src/api/cards"

describe.skip("/cards", () => {
  let token

  beforeAll(async () => {
    const user = { email: "test@test.com", password: "123123" }
    const { data } = await authApi.login(user)
    const { accessToken } = data
    token = accessToken
  })
  test("추가", async () => {
    const newCard = {
      title: "Sample Board222",
      listId: 5,
      pos: "ㅇㅇ",
    }
    const res = await cardApi.create(newCard, token)
    expect(res.status).toBe(201)
  })
  test("상세", async () => {
    const id = 1
    const res = await cardApi.retrieve(id, token)
    console.log(res.data.item)
    expect(res.status).toBe(200)
  })
  test("변경", async () => {
    const id = 1
    const change = { title: "Card-1 !" }
    const res = await cardApi.update(id, change, token)
    expect(res.status).toBe(200)
  })

  test("삭제", async () => {
    const id = 1
    const res = await cardApi.delete(id, token)
    expect(res.status).toBe(204)
  })
})
