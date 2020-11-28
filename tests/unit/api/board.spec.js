import authApi from "../../../src/api/auth"
import boardsApi from "../../../src/api/boards"

describe.skip("/boards", () => {
  let token

  beforeAll(async () => {
    const user = { email: "test@test.com", password: "123123" }
    const { data } = await authApi.login(user)
    const { accessToken } = data
    token = accessToken
  })
  test("추가", async () => {
    const newBoard = { title: "Sample Board222" }
    const res = await boardsApi.create(newBoard, token)
    expect(res.status).toBe(201)
  })
  test("상세", async () => {
    const id = 2
    const res = await boardsApi.retrieve(id, token)
    // const {
    //   data: { item },
    // } = res
    // console.log(item)
    expect(res.status).toBe(200)
  })
  test("변경", async () => {
    const id = 2
    const change = { title: "Sample Board2!" }
    const res = await boardsApi.update(id, change, token)
    expect(res.status).toBe(200)
  })
  test("삭제", async () => {
    const id = 2
    const res = await boardsApi.delete(id, token)
    expect(res.status).toBe(204)
  })
  test("리스트", async () => {
    const { data } = await boardsApi.list(token)
    const { list } = data
    console.log("list=", list)
    expect(data).not.toBeNull()
  })
})
