import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

// import 'bootstrap/dist/css/bootstrap.css';
import reducers from './reducers';
import Homepage from './components/Homepage';
import Nav from './Nav';
import DetailListing from './components/DetailListing';
import ThankYou from './components/ThankYou';
import ThankYouMaintenance from './components/ThankYouMaintenance';
import Register from './components/Register';
import OtherRouteSample from './components/OtherRouteSample';
import Login from './components/Login';
import Maintenance from './components/Maintenance';
import Property from './components/Property'
// import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  }

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
          <div>
              <Route path="/" component={Nav} auth={auth}>
                <IndexRoute component={Homepage}/>
              {/* <Route path="/" render={(props) => <Nav auth={auth} {...props} />} /> */}
                  
              {/* <Route path="/home" render={(props) => <Home auth={auth} {...props} />} /> */}
              {/* <Route path="/callback" render={(props) => {
                  handleAuthentication(props);
                  return <Callback {...props} />
              }}/> */}
              
              <Route path='/detail' component={DetailListing}/>
              <Route path='/thankyou' component={ThankYou}/>
              <Route path='/thankyoumaintenance' component={ThankYouMaintenance}/>
              <Route path='/users/register' component={Register}/>
              <Route path='/other-route' component={OtherRouteSample}/>
              <Route path='/users/login' component={Login}/>
              <Route path='/maintenance' component={Maintenance}/>
              <Route path='/rental' component={Property}/>
          </Route>
          </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
