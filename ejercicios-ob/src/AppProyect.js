import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ListContactComponent from './components/pure/container/list_contact';
import HomePage from './home/HomePage';
import LoginContact from './pages/auth/LoginContact';
import RegisterContact from './pages/auth/RegisterContact';

function AppProyect() {

  let loggedIn = true;

  return (
    <Router>
      <Switch>
        
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/'>
          {
            loggedIn ? 
            (<Redirect from='/' to='/contacts' />)
            :
            (<Redirect from='/' to = '/login'/>)
          }
        </Route>

        <Route exact path='/login' component={LoginContact}/>  
        <Route exact path='/contacts'>
          {
            loggedIn ? 
            (<ListContactComponent/>)
            :
            (<Redirect from='/' to = '/login'/>)
          }
        </Route>
        <Route path='/register' component={RegisterContact}/>
      </Switch>
    </Router>
  );
}

export default AppProyect;
