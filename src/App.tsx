import { AppBar, Box, Container, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import MenuIcon from '@mui/icons-material/Menu';
import Layout from './components/layouts/Layout';
import VerticalNavItems from 'src/data/navigation/vertical'

function App() {

  const settings = {
    skin : "", 
    appBar: "", 
    navHidden: "", 
    appBarBlur: "", 
    contentWidth: "",
  }

  return (
    <Provider store={store}>
      <div className="App"> 
        <Layout 
          contentHeightFixed={true} 
          settings={settings} 
          verticalLayoutProps={{
            navMenu: {
              navItems: VerticalNavItems()
    
              // Uncomment the below line when using server-side menu in vertical layout and comment the above line
              // navItems: verticalMenuItems
            },
          }}
        >
        </Layout>
      </div>
    </Provider>  
  );
}

export default App;
