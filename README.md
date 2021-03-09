npm install react-redux react-router-dom redux redux-logger redux-thunk

+-- _src
|+-- index.js
|+-- _components
||+-- App.js
||+-- root.js
||+-- _home
|||+-- home.js
||+-- _store
|||+-- store.js
||+-- reducers
|||+-- root_reducers.js


index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore({});
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
```

App.js
```javascript
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

```

root.js
```javascript
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;
```

home.js
```javascript
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class HomeContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render(){
        return (
            <div className='HomeContainer'>
                This is the Home Container
            </div>
        )
    }
}

const mstp = (state, ownProps) => {
    return ({

    })
};

const mdtp = (dispatch) => ({

})

export default HomeContainer
}

const mstp = (state, ownProps) => {
    return ({

    })
};

const mdtp = (dispatch) => ({

})

export default HomeContainer

```

store.js
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;
```

root_reducers.js
```javascript
import { combineReducers } from 'redux';


const RootReducer = combineReducers({

});

export default RootReducer;
```