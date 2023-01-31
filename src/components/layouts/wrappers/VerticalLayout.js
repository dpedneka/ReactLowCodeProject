import React, { useState } from "react"
import Box from "@mui/system/Box"
import styled from "@mui/system/styled"
import { AppBar, TextField } from "@mui/material"
import Navigation from "../navigations/vertical"
import InputElements from "src/components/input-elements/InputElement"
import GridContainers from "../containers/GridContainers"
import ListView from "src/components/list-view/ListView"

const VerticalLayoutWrapper = styled('div')({
    height: '100%',
    display: 'flex',
})

const MainContentWrapper = styled(Box)({
    flexGrow: 1,
    minWidth: 0,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
})

const VerticalLayout = (props) => {

    const { contentHeightFixed, verticalLayoutProps } = props


    return (
        <VerticalLayoutWrapper className='layout-wrapper'>

            <Navigation 
                verticalLayoutProps={verticalLayoutProps}
            />

             <MainContentWrapper className='layout-content-wrapper' sx={{ ...(contentHeightFixed && { maxHeight: '100vh' }) }}>
                <AppBar
                    sx={{
                        position : 'relative',
                        height : 70,
                    }}
                    // appBarContent={verticalLayoutProps.appBar?.content}
                    // appBarProps={verticalLayoutProps.appBar?.componentProps}
                >
                </AppBar>
                <GridContainers>
                    <InputElements />
                    <ListView />
                </GridContainers>
            </MainContentWrapper> 
        </VerticalLayoutWrapper>
    )
}

export default VerticalLayout