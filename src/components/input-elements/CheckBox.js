import React, { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, TextField } from '@mui/material'
import { toTitleCase } from 'src/redux/middleware/FormatTableColumns'

const CheckBox = ({ item }) => {

    const [checkBoxData, setCheckBoxData] = useState([])
    const [checkBoxInputValues, setCheckBoxInputValues] = useState([])

    const onCheckboxChangeHandler = (event) => {
        let cbData = []
        let cbIvalues = []
        checkBoxData.forEach(item => {
            if(item.label === event.target.name) 
                item.checked = event.target.checked
            cbData.push(item)
        })
        setCheckBoxData(cbData)
        cbData.forEach(cItem => {
            if(cItem.checked) 
                cbIvalues.push(cItem.Id)
        })
        setCheckBoxInputValues(cbIvalues)
    }

    useEffect(() => {
        let cbData = []
        let cbIvalues = []

        item.inputValues.forEach(inputValueItem => {
            cbData.push({
                Id : inputValueItem.Id,
                label : inputValueItem.label,
                checked : item.dbValue.includes(inputValueItem.Id)
            })
        })

        cbData.forEach(cItem => {
            if(cItem.checked) 
                cbIvalues.push(cItem.Id)
        })

        setCheckBoxData(cbData)
        setCheckBoxInputValues(cbIvalues)
    },[item])


    return (
        <Grid item xs={12} sm={6}>
            <FormGroup column>
                <TextField 
                    value={checkBoxInputValues}
                    type={"hidden"} 
                    sx={{
                        display: "none" 
                    }} 
                    {...item.attributes}
                />
                <FormLabel>{toTitleCase(item.label)}</FormLabel>
                <FormGroup row>
                {
                    checkBoxData.map(( cbItem, cbIndex ) => {
                        return (
                            <FormControlLabel 
                                key={cbIndex}
                                label={cbItem.label} 
                                control= {
                                    <Checkbox 
                                        checked={cbItem.checked}
                                        name={cbItem.label} 
                                        onChange={onCheckboxChangeHandler} 
                                    />
                                }
                            />
                        )
                    })
                }
                </FormGroup>
            </FormGroup>
        </Grid>
    )
}

export default CheckBox