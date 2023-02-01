import React, { useEffect, useState } from "react"
import { Box, Grid, TextField } from "@mui/material"
import { toTitleCase } from "src/redux/middleware/FormatTableColumns"

const TextArea = ({ item }) => {

    const [value, setValue] = useState(item.dbValue === 0 ? "" : item.dbValue)

    const onChangeHandler = event => setValue(event.target.value)

    useEffect(() => {
      setValue(item.dbValue)
    },[item.dbValue])

    return (
      <Grid item xs={12} sm={6}>
        <TextField value={value} {...item.attributes} onChange={onChangeHandler} rows={4} multiline label={toTitleCase(item.label)} id='textarea-outlined-static' />
      </Grid>
    )
}

export default TextArea