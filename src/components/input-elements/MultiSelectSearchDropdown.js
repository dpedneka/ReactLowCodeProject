import React, { useEffect, useState } from "react"
import { Autocomplete, Grid, TextField } from "@mui/material"
import { Box } from "@mui/material"
import { top100Films } from "src/data/multiselect"
import HiddenElement from "./HiddenElement"
import { toTitleCase } from "src/redux/middleware/FormatTableColumns"

const MultiSelectSearchDropdown = ({ item }) => {

    const [selectedItems, setSelectedItems] = useState([])
    const [selectedIds, setSelectedIds] = useState([])

    const onChangeHandler = (event, newValue) => {
        console.log(newValue)
        setSelectedItems(newValue)
        let Ids = []
        newValue.forEach(item => {
            Ids.push(item.Id)
        })
        setSelectedIds(Ids)
    }

    useEffect(() => {
        // setSelectedItems(item.dbValue)
        let selectedValues = []
        item.inputValues.forEach((x) => {
            if(item.dbValue.includes(x.Id))
                selectedValues.push(x)
        })
        setSelectedItems(selectedValues)
        setSelectedIds(item.dbValue)
    },[item.dbValue])
    
    return (
        <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <TextField 
                    value={selectedIds}
                    type={"hidden"} 
                    sx={{
                        display: "none" 
                    }} 
                    {...item.attributes}
                />
                <Autocomplete
                    onChange={onChangeHandler}
                    multiple
                    options={item.inputValues}
                    filterSelectedOptions
                    value={selectedItems}
                    // defaultValue={[item.inputValues[0]]}
                    id='autocomplete-multiple-outlined'
                    getOptionLabel={option => option.label}
                    sx={{ display: 'flex', flex : 1 }}
                    renderInput={
                        params => <TextField {...params} label={toTitleCase(item.label)} placeholder={item.label} />
                    }
                />
            </Box>
        </Grid>
    )
}

export default MultiSelectSearchDropdown