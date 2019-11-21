import React from 'react';
import {Layout} from 'antd'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Componentes
import Menu from './Components/Menu'


// Pages
import Home from './pages/home'
import Actividad from './pages/actividad'
import Error404 from './pages/error404'



export default function App() {
  const {Header, Content} = Layout
  return (
    <Layout>
      <Router>
       <Header style={{ zIndex: 1 }}>
         <Menu />
       </Header>
      <Content> 
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>  
          <Route path="/actividad" exact={true}>
            <Actividad />
          </Route>        
          <Route path="*" >
            <Error404 />
          </Route>
        </Switch>
      </Content>
      </Router>
    </Layout>
  );
}


