import createSlice from '@reduxjs/toolkit'
import { useReducer, useState } from 'react'

const initialState = {
    userLoggedIn : false,
    userData : [],
    isloggedIn : false
}

const testSlice = createSlice({
    name : "TestSlice",
    initialState,
    reducers : {
        beforeLogin() {

        },
        pendingLogin() {

        },
        afterLogin() {

        },
        login() {

        },
        logout() {
            
        }
    }
})

export const loginThunk = () => {
    return (dispatch) => {
        dispatch(testActions.login())
        
        dispatch(testActions.logout())
    }
}

export const testActions = testSlice.actions

export default testSlice


const TestContext = createContext({
    user : [],
    isLoading : false,
    isLoggedIn : false,
    login : () => {},
    logout : () => {}
})

const loginReducer = (state, action) => {
    if(action.type === "login") {
        return state
    }

    if(action.type === "logout") {
        return state
    }

    return state
}

export const TestContextProvider = () => {

    const [isLoading, setIsloading] = useState(false)
    const [userData, dispatchUser] = useReducer(loginReducer, initialState)

    const isLoggedIn = !userData

    const login = () => {
        setIsloading(true)
        dispatchUser({
            type : "Login",
            payload : {
                user : []
            }
        })
        setIsloading(false)
    }

    const logout = () => {}

    const loginCtx = {
        user : userData,
        isLoading : isLoading,
        isLoggedIn : isLoggedIn,
        login : login,
        logout : logout
    }

    return (
        <TestContext.Provider value={loginCtx}>

        </TestContext.Provider>
    )
}

export default TestContext