// ** React Imports
import React, { Fragment, useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import { Grid, TextField } from '@mui/material'

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 250
  }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

const MultiMediaUpload = ({ item }) => {
  // ** State
  const [files, setFiles] = useState([])
  const [fileData, setFileData] = useState("")

    useEffect(() => {
        let fileNames = ""
        files.forEach((item, index) => {
            fileNames += item.name + ","
        })
        setFileData(fileNames)
    },[files])

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
    } else {
      return <Icon icon='mdi:file-document-outline' />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const fileList = files.map(file => (
    <ListItem key={file.name} sx={{
        display: 'flex',
        flex: 1,
        border: 1, 
        borderRadius : 2, 
        borderColor : 'rgba(0, 0, 0, 0.23)',
        marginBottom: 2,
    }}>
      <div className='file-details' style={{
            display: 'flex',
            flex: 1,
        }}>
        <div className='file-preview' style={{
            marginRight:10
        }}>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Icon icon='mdi:close' fontSize={20} />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  return (
    <>
        <Grid item xs={12} sm={12}>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <TextField 
                    value={fileData} 
                    {...item.attributes} 
                    type={"hidden"} 
                    sx={{
                        display: "none" 
                    }} 
                />
                <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
                    <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            textAlign: ['center', 'center', 'inherit'], 
                            alignItems: 'center', 
                            flex : 1, 
                            border: 1, 
                            borderRadius : 2, 
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 5,
                            paddingBottom: 5,
                            borderColor : 'rgba(0, 0, 0, 0.23)'
                        }}>
                        <Typography color='textSecondary' sx={{
                            flex : 1,
                            textAlign : 'center'
                        }}>
                            Drop files here or click
                        </Typography>
                    </Box>
                </Box>
            </div>
        </Grid>
        {files.length ? (
            <>
                <Grid item xs={12} sm={12}>
                    <List sx={{
                        display:'flex',
                        flex : 1
                    }}>{fileList}</List>
                </Grid>
                {/* <Grid item xs={12} sm={12}>
                    <div className='buttons'>
                        <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                        Remove All
                        </Button>
                        <Button variant='contained'>Upload Files</Button>
                    </div>
                </Grid> */}
            </>
        ) : null}
    </>
  )
}

export default MultiMediaUpload
