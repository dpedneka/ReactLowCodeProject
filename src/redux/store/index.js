import { configureStore } from "@reduxjs/toolkit";
import TextInputSlice from "../slice/textinput-slice";
import logger from 'redux-logger';
import TableInputSlice from "../slice/tableInput-slice";
import formInputElementsSlice from "../slice/Form4/form4-slice";


const store = configureStore({
    reducer : {
        textInputReducer : TextInputSlice.reducer,
        tableInputReducer : TableInputSlice.reducer,
        formInputElementReducer: formInputElementsSlice.reducer
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default store