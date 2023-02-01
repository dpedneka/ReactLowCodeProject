import React, { useEffect, useState } from "react"
import { Grid, TextField } from "@mui/material"
import { toTitleCase } from "src/redux/middleware/FormatTableColumns"

const TextBoxNumber = ({ item }) => {
    
    const [value, setValue] = useState(item.dbValue === 0 ? "" : item.dbValue)

    const onChangeHandler = event => setValue(event.target.value)

    useEffect(() => {
      setValue(item.dbValue)
    },[item.dbValue])
    
    return (
        <Grid item xs={12} sm={6}>
            <TextField type='number' value={value} {...item.attributes} onChange={onChangeHandler} label={toTitleCase(item.label)} />
        </Grid>
    )
}

export default TextBoxNumber