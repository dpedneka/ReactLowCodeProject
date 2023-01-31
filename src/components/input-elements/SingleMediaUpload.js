import { Box, Grid, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useDropzone } from 'react-dropzone'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4)
    }
}))

const SingleMediaUpload = ({ item }) => {

    // ** State
    const [files, setFiles] = useState([])
    const [fileData, setFileData] = useState("")

    useEffect(() => {
        let fileNames = ""
        files.forEach((item) => {
            fileNames += item.name
        })
        setFileData(fileNames)
    },[files])

    // ** Hook
    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif']
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file)))
        }
    })

    const img = files.map(file => (
        <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file)} />
    ))

    return (
        <Grid item xs={12} sm={6}>
            <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 100 } : {}}>
                <input {...getInputProps()} />
                <TextField 
                    value={fileData} 
                    {...item.attributes} 
                    type={"hidden"} 
                    sx={{
                        display: "none" 
                    }} 
                />
                {
                    files.length ? (
                        img
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center', flex : 1, border: 1, borderRadius : 2, borderColor : 'rgba(0, 0, 0, 0.23)' }}>
                            <Typography color='textSecondary' sx={{
                                flex : 1,
                                textAlign : 'center'
                            }}>
                                Drop files here or click
                            </Typography>
                        </Box>
                    )
                }
            </Box>
        </Grid>
    )
} 

export default SingleMediaUpload