import React, { useEffect, useState } from "react"
import { FormControlLabel, TextField } from "@mui/material"


const HiddenElement = ({ item }) => {

    const [value, setValue] = useState(item.dbValue === 0 ? "" : item.dbValue)

    useEffect(() => {
        setValue(item.dbValue)
    },[item.dbValue])

    return <TextField 
    value={value}
    type={"hidden"} 
    sx={{
        display: "none" 
    }} 
    {...item.attributes}
    />
}

export default HiddenElement