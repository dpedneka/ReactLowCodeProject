import React, { useEffect, useState } from "react"
import { Box, Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, Select } from "@mui/material"

// const ITEM_HEIGHT = 48
// const ITEM_PADDING_TOP = 8

// const MenuProps = {
//     PaperProps: {
//         style: {
//             width: 250,
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
//         }
//     }
// }

const MultiSelectDropdown = ({ item }) => {
    // ** State
    const [selectedItems, setSelectedItems] = useState([])

    const handleChange = event => {
        setSelectedItems(event.target.value)
    }

    useEffect(() => {
        // setSelectedItems(item.dbValue)
    },[item.dbValue])

    return(
        <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems:'center', flexDirection: 'column'}}>
                <FormControl fullWidth>
                    <InputLabel id='demo-multiple-checkbox-label'>{item.label}</InputLabel>
                    <Select
                        multiple
                        label='Tag'
                        value={selectedItems}
                        // MenuProps={MenuProps}
                        onChange={handleChange}
                        id='demo-multiple-checkbox'
                        labelId='demo-multiple-checkbox-label'
                        renderValue={selected => selected.join(', ')}
                    >
                        {
                            item.inputValues?.map((item, index) => (
                                <MenuItem key={index} value={item.label}>
                                    <Checkbox checked={selectedItems.indexOf(item.label) > -1} />
                                    <ListItemText primary={item.label} />
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </Grid>
    )
}

export default MultiSelectDropdown