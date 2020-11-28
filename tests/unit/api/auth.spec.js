import api from "../../../src/api/auth"

describe.skip("/auth", () => {
  it("/login", async () => {
    //given
    const user = { email: "test@test.com", password: 123123 }

    //when
    const { data } = await api.login(user)
    const { accessToken } = data

    //then
    console.log(`accessToken=${accessToken}`)
    expect(accessToken).toBeTruthy()
  })
})
