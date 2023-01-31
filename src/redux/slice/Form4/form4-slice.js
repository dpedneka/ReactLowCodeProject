import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { editFormDataForInputElements, fetchFormData, fetchFormDataRV, getFormInputElements, storeFormInputElements } from "src/configs/api/form4-api"

import axios from 'axios'
import { formatFormData, formatFormValues, formatStorableValues } from "src/redux/middleware/FormatFormData"
import { formatTableColumns, formatTableRows } from "src/redux/middleware/FormatTableColumns"

// ** Fetch Form Data
export const getFormData = createAsyncThunk('form4Data/getFormData', async (payload) => {
    const response = await axios.get(getFormInputElements)

    return response.data
})

export const storeFormData = createAsyncThunk('form4Data/storeFormData', async (payload, 
    { dispatch }) => {
    const storableData = await formatStorableValues(payload)
    const response = await axios.get(storeFormInputElements + storableData)
    await dispatch(getFormData())
    return response.data
})

export const editFormData = createAsyncThunk('form4Data/editFormData', async (payload) => {
    const response = await axios.get(editFormDataForInputElements + payload)
    return response.data
})

// ** Fetch Form List Data

export const fetchFormListData = createAsyncThunk('form4Data/fetchFormData', async (payload) => {
    const response = await axios.get(fetchFormDataRV)
    return response.data
})

const initialState = {
    formData : [],
    formValues :[],
    formListData :[],
    isLoading : false
}

const formInputElementsSlice = createSlice({
    name : "FormInputElementSlice",
    initialState,
    reducers : {
        updateFormData(state, action) {
            // state.formValues.filter(x => x.dbFieldName === )
        }
    },
    extraReducers: builder => {
        builder.addCase(getFormData.fulfilled, (state, action) => {
            state.formData = formatFormData(action.payload)
            state.formValues = formatFormValues(action.payload)
        })
        builder.addCase(editFormData.fulfilled, (state, action) => {
            state.formData = formatFormData(action.payload)
            state.formValues = formatFormValues(action.payload)
        })
        builder.addCase(fetchFormListData.fulfilled, (state, action) => {
            state.formListData = [{
                tableHeaders : formatTableColumns(action.payload),
                tableRows : formatTableRows(action.payload)
            }]
        })
    }
})

export default formInputElementsSlice