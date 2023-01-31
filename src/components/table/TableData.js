import React, { useEffect, useState } from "react"
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useDispatch } from "react-redux"
import { editFormData } from "src/redux/slice/Form4/form4-slice"

const TableEditableColumns = ({indexId, index, column, editableId}) => {  

    const dispatch = useDispatch()

    const editHandler = () => {
        dispatch(editFormData(editableId))
    }
    const deleteHandler = () => {
    }


    if(indexId === -1) 
        return <TableCell align={column.align}>
                {index}
            </TableCell>
    
    if(indexId === -2)
        return <TableCell align={column.align}>
            <Button variant='outlined' size='small' onClick={editHandler}>
            Edit
            </Button>
        </TableCell>
    
    if(indexId === -3)
        return <TableCell align={column.align}>
            <Button variant='outlined' size='small' onClick={deleteHandler}>
            Delete
            </Button>
        </TableCell>

    if(indexId === -4)
        return <TableCell align={column.align}>
        </TableCell>
}

const TableData = ({ tableData }) => {

     // ** States
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState([])
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    useEffect(() => {
        setRows(tableData[0].tableRows)
        setColumns(tableData[0].tableHeaders)
    }, [tableData])
    

    return (
        <>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                    <TableRow>
                    {
                        columns.map(column => (
                            <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                                {column.label}
                            </TableCell>
                        ))
                    }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            return (
                                <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                                {
                                    columns.map((column, cIndex) => {
                                        if(column.indexId < 0) {
                                            return <TableEditableColumns
                                                key={index+"-"+column.indexId}
                                                indexId={column.indexId}
                                                index={index+1}
                                                column={column}
                                                editableId={row.editableId}
                                            />
                                        } 
                                        const value = row[column.Id]
                                        return (
                                            <TableCell key={index+"-"+column.indexId} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        )
                                    })
                                }
                                </TableRow>
                            )
                        })
                    }
                </TableBody> 
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default TableData