import React, { Component } from 'react';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './components/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/status/:date">
              <Main />
            </Route>
            <Route exac path="/status">
              <Main />
            </Route>
            <Route path="/">
              <Redirect to="/status"/>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
