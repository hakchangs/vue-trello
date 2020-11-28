import store from "../../../src/store"

describe.skip("store.auth", () => {
  test("로그인", async () => {
    const user = { email: "test@test.com", password: "123123" }
    await store.dispatch("auth/LOGIN", user)

    const authState = store.state.auth
    const meState = store.state.me
    console.log("token=", authState.token)
    console.log("me=", meState.name)
    expect(authState.token).toBeTruthy()
    expect(store.getters["auth/authorized"]).toBeTruthy()
  })
})
