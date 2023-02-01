import React, { useEffect, useState } from "react"
import { FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup } from "@mui/material"
import { toTitleCase } from "src/redux/middleware/FormatTableColumns"

const RadioButton = ({ item }) => {
    // ** State
    const [value, setValue] = useState(item.dbValue === 0 ? "" : item.dbValue)
  
    const handleChange = event => {
      setValue(event.target.value)
    }

    useEffect(() => {
      setValue(item.dbValue)
    },[item.dbValue])
  
    return (
        <Grid item xs={12} sm={6}>
            <FormGroup column>
                <FormLabel>{toTitleCase(item.label)}</FormLabel>
                <FormControl sx={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    <RadioGroup row value={value} name='simple-radio' onChange={handleChange} aria-label='simple-radio'>
                        <FormControlLabel value='male' control={<Radio />} label='Male' />
                        <FormControlLabel value='female' control={<Radio />} label='Female' />
                    </RadioGroup>
                </FormControl>
            </FormGroup>
        </Grid>
    )
}

export default RadioButton