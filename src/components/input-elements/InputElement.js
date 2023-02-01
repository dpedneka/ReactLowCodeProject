import React, { useEffect, useState } from "react"
import TextField from '@mui/material/TextField'
import CheckBox from "./CheckBox"
import TextBox from "./TextBox"
import { useDispatch, useSelector } from "react-redux"
import { getFormData, storeFormData, updateFormData } from "src/redux/slice/Form4/form4-slice"
import DropdownSelect from "./DropdownSelect"
import HiddenElement from "./HiddenElement"
import TextArea from "./TextArea"
import Picker from "./picker/Picker"
import RadioButton from "./RadioButton"
import MultiSelectDropdown from "./MultiSelectDropdown"
import TextBoxNumber from "./TextBoxNumber"
import MultiSelectSearchDropdown from "./MultiSelectSearchDropdown"
import EmailTextBox from "./EmailTextBox"
import { Button, CardHeader, Divider, Grid, Typography } from "@mui/material"
import SingleMediaUpload from "./SingleMediaUpload"
import MultiMediaUpload from "./MultiMediaUpload"

const InputTypes = ({ item }) => {

    if(item.type === "text")
        return <TextBox item={item} />

    if(item.type === "checkbox")
        return <CheckBox item={item} />
        
    if(item.type === "dropdownSelect") 
        return <DropdownSelect item={item} />

    if(item.type === "hidden") 
        return <HiddenElement item={item} />

    if(item.type === "textarea")
        return <TextArea item={item} />

    if(item.type === "date")
        return <Picker item={item} />
    
    if(item.type === "radio")
        return <RadioButton item={item} />
    
    if(item.type === "number")
        return <TextBoxNumber item={item} />

    if(item.type === "singleMediaUpload")
        return <SingleMediaUpload item={item} />

    if(item.type === "multiMediaUpload")
        return <MultiMediaUpload item={item} />
    
    if(item.type === "email")
        return <EmailTextBox item={item} />
    
    if(item.type === "multiSelectDropdown")
        return <MultiSelectDropdown item={item} />
    
    if(item.type === "multiSelectSearchDropdown")
        return <MultiSelectSearchDropdown item={item} />

    return <TextField {...item.attributes} />
}

const InputElements = props => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.formInputElementReducer)

    const [inputElementsData, setInputElementsData] = useState([])
    const [editableId, setEditableId] = useState(1)

    useEffect(() => {
        dispatch(getFormData())
    },[])
    
    useEffect(() => {
        setEditableId(data.editableId)
    }, [data])

    useEffect(() => {
        setInputElementsData(data.formData)
    }, [data.formData])

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(storeFormData({
        //     event,
        //     data
        // }))

        dispatch(updateFormData({
            event,
            data,
            editableId
        }))
    }
    return (
        <div className='demo-space-x'>
            <form autoComplete='off' onSubmit={handleSubmit} encType="multipart/form-data">
                <Grid container spacing={5} sx={{
                    m : 0
                }}>
                    <Grid item xs={12} sx={{
                        textAlign : 'left',
                        p : 0,
                        color: 'rgba(76, 78, 100, 0.87)'
                    }}>
                        <CardHeader sx={{
                            p : 0
                        }} title='Add' />
                    </Grid>
                    <Divider sx={{ m: '0 !important' }} />
                    {
                        inputElementsData.map((item, index) => {
                            return (
                                <InputTypes item={item} key={index} />
                            )
                        })   
                    }
                    <Grid item xs={12}>
                        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default InputElements