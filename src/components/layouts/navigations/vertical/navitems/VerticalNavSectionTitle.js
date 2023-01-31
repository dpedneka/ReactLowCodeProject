import React from "react"
import MuiListSubheader from '@mui/material/ListSubheader'
import { styled, useTheme } from '@mui/material/styles'
import { Divider, Typography } from "@mui/material"
import Translations from "src/components/layouts/components/Translations"

const ListSubheader = styled(props => <MuiListSubheader component='li' {...props} />)(({ theme }) => ({
    lineHeight: 1,
    display: 'flex',
    position: 'static',
    padding: theme.spacing(3),
    marginTop: theme.spacing(6.25),
    backgroundColor: 'transparent',
    color: theme.palette.text.disabled,
    transition: 'padding-left .25s ease-in-out'
  }))

const VerticalNavSectionTitle = props => {

    const { item } = props
    
    const conditionalBorderColor = () => {
        return {
            '&, &:before': {
                borderColor: `grey`
            }
        }
    }

    const conditionalColor = () => {
        return {
            color: `rgba(76, 78, 100, 0.38) !important`
        }
    }

    return <>
        <ListSubheader
            className='nav-section-title'
            sx={{ 
                marginTop : '1.5625rem',
                p: '0.75rem',
                pl : 0
            }}
        >
            <Divider
                textAlign='left'
                sx={{
                    m: '0 !important',
                    lineHeight: 'normal',
                    ...conditionalBorderColor(),
                    '&:before': { top: 7, transform: 'none', width: '1rem' },
                    '&:after': { display: 'none' }
                }}
                >
                    <Typography noWrap variant='caption' sx={{ 
                        ...conditionalColor(),
                        textTransform : 'uppercase'    
                    }}>
                        <Translations text={item.sectionTitle} />
                    </Typography>
                </Divider>
        </ListSubheader>
    </>
}

export default VerticalNavSectionTitle