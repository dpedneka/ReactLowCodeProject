
import { createSlice } from '@reduxjs/toolkit'
import { createContext } from 'react'

const initialState = {
    users : [],
    isLoggedIn : false
}

const testSlice = createSlice({
    name : "sliceName", 
    initialState,
    reducers : {
        sliceReducer1(state, action) {
            state.users.push(action.payload)
        },
        sliceReducer2(state, action) {
            state.users = []
        }
    }
})

export const thunkMiddleware = () => {
    return (dispatch) => {
        // dispatch(login) 

        // //api calls

        // dispatch(logout)
    }
}

export const sliceActions = testSlice.actions

export default testSlice



// const TestContext = createContext({
//     isLoggedIn : false,
//     user: [],
//     login : () => {},
//     logout : () => {}
// })

// const loginReducer = (state, action) => {   

//     if(action.type === "LOGIN_PENDING") {
//         return state
//     }

//     return state

// }

// const TestContextProvider = (props) => {

//     const [userDetails, dispatchUser] = useReducer(loginReducer ,initialState)\

//     const loginHandler = () => {
//         dispatchUser({type : "LOGIN_PENDING", user : ""})
//     }

//     const logoutHandler = () => {
//         dispatchUser({type : "LOGOUT_PENDING", user : ""})
//     }

//     const user = {
//         isLoggedIn : userDetails.user.length > 0,
//         user: userDetails.user,
//         login : loginHandler,
//         logout : logoutHandler
//     }

//     return (
//         <TestContext.Provider value={user}>
//             {props.children}
//         </TestContext.Provider>
//     )
// }

// export default TestContext


// import { createSlice } from "@reduxjs/toolkit";

// //Initializing State
// const initialState = {
//     isLoading: false,
//     inputElement : []
// }

// //Creating Slice
// const TextInputSlice = createSlice({
//     name : "textInputSlice",
//     initialState,
//     reducers : {
//         addingTextBox(state) {
//             state.isLoading = true
//         },
//         addedTextBox(state) {
//             state.isLoading = false
//         },
//         removingTextBox(state) {
//             state.isLoading = true
//         },
//         removedTextBox(state) {
//             state.isLoading = false
//          }
//     }
// })

// //Creating Thunk

// export const TextInputAddingHandler = () => {
//     return (dispatch) => {
//         dispatch(TextInputActions.addingTextBox())

//         //

//         dispatch(TextInputActions.addedTextBox())
//     }
// }

// //Exporting the actions
// export const TextInputActions = TextInputSlice.actions

// //Exporting the Slice
// export default TextInputSlice