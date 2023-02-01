import React, { useEffect, useState } from 'react'
import { Grid, TextField } from '@mui/material'
import { toTitleCase } from 'src/redux/middleware/FormatTableColumns'

const TextBox = ({ item }) => { 
    const [value, setValue] = useState(item.dbValue === 0 ? "" : item.dbValue)

    const onChangeHandler = event => setValue(event.target.value)

    useEffect(() => {
        setValue(item.dbValue)
    },[item.dbValue])

    return (
        <Grid item xs={12} sm={6} sx={{
            display: 'flex',
            p : 1
        }}>
            <TextField {...item.attributes} value={value} onChange={onChangeHandler} label={toTitleCase(item.label)} sx={{
                flex : 1,
            }}  />
        </Grid>
    )
}

export default TextBox