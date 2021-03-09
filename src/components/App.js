import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import HomeContainer from './home/HomeContainer'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
}

export default App;
