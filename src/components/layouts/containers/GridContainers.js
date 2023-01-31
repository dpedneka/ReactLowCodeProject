import { Card, CardContent, Grid } from "@mui/material"


const GridContainers = props => {
    const { id, sx, code, title, children, className } = props
    return (
        <Grid container className='match-height' sx={{overflowX: 'hidden'}}>
            <Grid item xs={12} sx={{
                margin : 2  
            }} >
                <Card
                    className={""}
                    elevation={6}
                    sx={{ 
                        '& .MuiCardHeader-action': { lineHeight: 0.8 }, ...sx,
                    }}
                >
                    <CardContent>
                        {props.children}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default GridContainers