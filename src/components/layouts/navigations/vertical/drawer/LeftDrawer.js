import React from "react"
import { makeStyles } from "@mui/styles";
import { Divider, Drawer, List } from "@mui/material";
import VerticalNavItems from "../navitems/VerticalNavItems";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: {
      minHeight: 56
    },
    content: {
      flexGrow: 1,
      backgroundColor: "white",
      padding: 3,
    },
}));

const LeftDrawer = (props) => {

    const classes = useStyles();

    return (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List className='nav-items'>
            <VerticalNavItems 
              verticalNavItems={props.verticalLayoutProps.navMenu.navItems}
            />
          </List>
        </Drawer>
    )
}

export default LeftDrawer