import { createSlice } from "@reduxjs/toolkit";
// import { rowData, tableInputElements, tableProperties, tableRowData } from "../../interfaces/tableProperties";
// import data from '../../data/tabledata.json' // Mostly from API

const initialState : any = {
    tableData : []
}

// interface tableActions {
//     payload : {
//         values : rowData [];
//     }

// }

const TableInputSlice = createSlice({
    name : "TableInputSlice",
    initialState,
    reducers : {
        addTable(state, action) {
            
        },
        deleteTable(state, action) {
            
        },
        updateTable(state, action) {
            
        },
        // addRow(state, action : tableActions) {
        //     let trdata:tableInputElements[] = [];
        //     action.payload.values.forEach((item, index) => {
        //         trdata.push({
        //             type :  "label",
        //             name: "textBox" + (state.tableData[0].tableRows.length + 1) + index,
        //             id: "textBox" + (state.tableData[0].tableRows.length + 1) + index,
        //             value : item.rowValue,
        //             classes: ["border-0", "border-bottom", "outline-0"],
        //             height: 35,
        //             width : 150,
        //             hidden: false,
        //             copyValue : [],
        //             dropDownData : [],
        //             checkBoxData : [],
        //             radioButtonData : [],
        //             onChangeApi: "",
        //             readOnly : false,
        //             validation : ""
        //         })
        //     })
        //     state.tableData[0].tableRows.push(trdata)
        // },
        // deleteRow(state, action) {
        //     let tableRowsData = state.tableData[0].tableRows
        //     let updatedTableData:tableInputElements[][] = []
        //     tableRowsData.forEach((item, index ) => {
        //         if(index !== action.payload.value) {
        //             updatedTableData.push(item)
        //         }
        //     })

        //     state.tableData[0].tableRows = updatedTableData
        // },
        // updateRow(state, action) {
        //     state.tableData[0].tableRows[0][0].value = state.tableData[0].tableRows[action.payload.value][0].value
        //     state.tableData[0].tableRows[0][1].value = state.tableData[0].tableRows[action.payload.value][1].value
        //     state.tableData[0].tableRows[0][2].value = state.tableData[0].tableRows[action.payload.value][2].value
        //     state.tableData[0].tableRows[0][3].value = state.tableData[0].tableRows[action.payload.value][3].value
        //     state.tableData[0].tableRows[0][4].value = state.tableData[0].tableRows[action.payload.value][4].value
        //     state.tableData[0].tableRows[0][5].value = state.tableData[0].tableRows[action.payload.value][5].value
        // // }
    }
})

const deleteRowData = () => {
    return 
}

export const updateTableData = () => {}

export const saveTableData = () => {}

export const getTableData = () => {}

export const tableInputActions = TableInputSlice.actions

export default TableInputSlice