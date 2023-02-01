import { Box, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import DatePicker from 'react-datepicker'
import PickersComponent from "./PickersComponent"
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { toTitleCase } from "src/redux/middleware/FormatTableColumns"

const Picker = ({ item }) => {

    const [date, setDate] = useState(item.dbValue === 0 || item.dbValue === "" ? new Date() : new Date(item.dbValue))
    const popperPlacement = 'bottom-end'
    
    useEffect(() => {
        if(item.dbValue !== 0 && item.dbValue.replaceAll(" ","") !== "") {
            setDate(new Date(item.dbValue))
        }
    },[item.dbValue])

    return (
        <Grid item xs={12} sm={6}>
            <DatePickerWrapper>
                <div style={{ flex : 1, display : 'flex' }}>
                    <DatePicker
                        {...item.attributes}
                        selected={date}
                        id='basic-input'
                        popperPlacement={popperPlacement}
                        onChange={date => setDate(date)}
                        placeholderText='Click to select a date'
                        customInput={<PickersComponent label={toTitleCase(item.label)} />}
                    />
                </div>
            </DatePickerWrapper>
        </Grid>
    )
}

export default Picker