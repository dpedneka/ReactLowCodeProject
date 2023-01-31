import React from "react"
import { Box, Chip, Link, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material"
import Translations from "src/components/layouts/components/Translations"

const VerticalNavLink = ({
    item
}) => {

   

    return (
        <ListItem
        disablePadding
        className='nav-link'
        disabled={item.disabled || false}
        sx={{
            mt: 1.5,
            transition: 'padding .25s ease-in-out',
            px: '0 !important'
        }}
        >
            <Translations text={item.title} />
        </ListItem>
    )
}

export default VerticalNavLink