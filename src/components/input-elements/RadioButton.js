import React, { useEffect, useState } from "react"
import { FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material"
import { toTitleCase } from "src/redux/middleware/FormatTableColumns"

const RadioButton = ({ item }) => {
    // ** State
    const [value, setValue] = useState(item.dbValue === 0 ? "" : item.dbValue)
  
    const handleChange = event => {
        // console.log(event.target.value)
        setValue(event.target.value)
    }

    useEffect(() => {
        setValue(item.dbValue)
    },[item.dbValue])
  
    return (
        <Grid item xs={12} sm={6}>
            <FormGroup column>
                <TextField 
                    value={value}
                    type={"hidden"} 
                    sx={{
                        display: "none" 
                    }} 
                    {...item.attributes}
                />
                <FormLabel>{toTitleCase(item.label)}</FormLabel>
                <FormControl sx={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    <RadioGroup row value={value} name='simple-radio' onChange={handleChange} aria-label='simple-radio'>
                        {
                            item.inputValues?.map((item, index) => {
                                return (
                                    <FormControlLabel key={index} value={item.Id} control={<Radio />} label={item.label} />
                                )
                            })
                        }
                    </RadioGroup>
                </FormControl>
            </FormGroup>
        </Grid>
    )
}

export default RadioButton