import authApi from "../../../src/api/auth"
import listApi from "../../../src/api/lists"

describe.skip("/lists", () => {
  let token

  beforeAll(async () => {
    const user = { email: "test@test.com", password: "123123" }
    const { data } = await authApi.login(user)
    const { accessToken } = data
    token = accessToken
  })

  test("추가", async () => {
    const newList = {
      title: "리스트1",
      boardId: 1,
      pos: "eng",
    }
    const res = await listApi.create(newList, token)
    expect(res.status).toBe(201)
  })
  test("변경", async () => {
    const id = 4
    const change = { title: "리스트222" }
    const res = await listApi.update(id, change, token)
    expect(res.status).toBe(200)
  })
  test("삭제", async () => {
    const id = 4
    const res = await listApi.delete(id, token)
    expect(res.status).toBe(204)
  })
})
