import React, { useEffect, useState } from "react"
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"

const DropdownSelect = ({item}) => {

    const [value, setValue] = useState(item.dbValue === 0 ? "" : item.dbValue)

    const onChangeHandler = event => setValue(event.target.value)

    useEffect(() => {
        setValue(item.dbValue)
    },[item.dbValue])

    return(
        <Grid item xs={12} sm={6}>
            <FormControl sx={{
                minWidth : '6rem !important'
            }}>
                <InputLabel id='demo-simple-select-outlined-label'>{item.label}</InputLabel>
                <Select
                    label={item.label}
                    defaultValue=''
                    value={value}
                    id='demo-simple-select-outlined'
                    labelId='demo-simple-select-outlined-label'
                    onChange={onChangeHandler}
                    {...item.attributes}
                >
                    {
                        !item.attributes.required &&
                        <MenuItem value=''>
                            <em>None</em>
                        </MenuItem>
                    }
                    {
                        item.inputValues.map((sitem, sindex) => {
                            return (
                                <MenuItem key={sitem.Id} value={sitem.Id}>{sitem.label}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </Grid>
    )
}

export default DropdownSelect