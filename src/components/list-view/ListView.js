import React, { useEffect } from "react"
import { Card, CardHeader, Grid } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { fetchFormListData } from "src/redux/slice/Form4/form4-slice"
import TableData from "../table/TableData"

const ListView = () => {
    
    const dispatch = useDispatch()

    const tableData = useSelector(state => state.formInputElementReducer.formListData)

    useEffect(() => {
        dispatch(fetchFormListData())
    }, [])

    return (
        <Grid item xs={12}>
            <Card sx={{
                boxShadow : 0
            }}>
                <CardHeader title='List View' sx={{
                    textAlign: 'left'
                }} />
                {
                    tableData.length > 0 ? 
                    <TableData tableData={tableData} />
                    :
                    <></>
                }
            </Card>
        </Grid>
    )
}

export default ListView