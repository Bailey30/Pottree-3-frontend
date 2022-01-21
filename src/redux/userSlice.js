import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            username: "",
            email: "",
            token: "",
            userId: ""
        },
        loggedIn: false
    },
    reducers: {
        login: (state, action) => {
            state.userInfo.username = action.payload.user
            state.userInfo.email = action.payload.email
            state.userInfo.token = action.payload.token
            state.userInfo.userId = action.payload.userId
            state.loggedIn = true

        },
        logout: (state) => {
            state.userInfo = {}
            state.loggedIn = false
        }
    }
}
)
export const { login, logout } = userSlice.actions
export default userSlice.reducer
