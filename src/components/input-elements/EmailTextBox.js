import React, { useEffect, useState } from "react"
import { Grid, TextField } from "@mui/material"

const EmailTextBox = ({ item }) => {

    const [value, setValue] = useState(item.dbValue === 0 ? "" : item.dbValue)

    const onChangeHandler = event => setValue(event.target.value)

    useEffect(() => {
      setValue(item.dbValue)
    },[item.dbValue])

    return (
        <Grid item xs={12} sm={6}>
            <TextField type='email' {...item.attributes} value={value} onChange={onChangeHandler} label={item.label} placeholder='username@gmail.com'  />
        </Grid>
    )
}

export default EmailTextBox