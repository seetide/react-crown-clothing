import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
