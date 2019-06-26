# Redux-II-Guided

## Using Redux in 12 Steps!
**1. Plan**

Think back to using state in React components. What slices of state will our application have? Write them down.

**2. Define Actions Types**

Key Question: What types of **actions** will alter my slices of state? Define them as types:
```js
export const EXAMPLE_ACTION_1 = 'EXAMPLE_ACTION_1';
export const EXAMPLE_ACTION_2 = 'EXAMPLE_ACTION_2';
export const EXAMPLE_ACTION_3 = 'EXAMPLE_ACTION_3';
export const EXAMPLE_ACTION_4 = 'EXAMPLE_ACTION_4';
```

**3. Define Action Creators**
```js
export function exampleFunc1() {
  return { type: EXAMPLE_ACTION_1 };
}

export function exampleFunc2() {
  return { type: EXAMPLE_ACTION_2 };
}

// Creating action creator that passes some data to the reducer
export function exampleFunc3() {
  return { type: EXAMPLE_ACTION_3, payload: newData };
}
```

**4. Create Reducers**
```js
// Importing our action types from the file they were exported from
import { EXAMPLE_ACTION_1, EXAMPLE_ACTION_2 } from './pathToActions';
```
```js
// Setting our slice of state's initial value to 100
export function exampleReducer1(sliceOfState = initialObject, action) {
  if (action.type === EXAMPLE_ACTION_1) {
    return { 
      ...sliceOfState,
      exampleProperty1: 'alteredValue'
     };
  }
  if (action.type === EXAMPLE_ACTION_2) {
    return { 
      ...sliceOfState,
      exampleProperty2: false
     };
  }
  return sliceOfState;
}
// Define additional reducers for each slice of state
```

**5. Combine Reducers**

In our `index.js`:
```js
import { combineReducers } from 'redux';
// Importing our reducers from the file they were exported from
import { exampleReducer1, exampleReducer2 } from './pathToReducers';
```
```js
const combinedReducer = combineReducers({
  example1: exampleReducer1,
  example2: exampleReducer2,
});
```

**6. Create Redux Store**

In our `index.js`:
```js
import { createStore, combineReducers } from 'redux';
```
```js
const store = createStore(
  combinedReducer, // IS THE RESULT OF USING combineReducers
);
```

Connecting to Redux DevTools:
```js
const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

**7. Use Redux Store in React App**

In our `index.js`:
```js
import { Provider } from 'react-redux';
```
```jsx
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
```
              
**8. Connect React Components**

In our component file:
```js
import { connect } from 'react-redux';
```
At the bottom of our component:
```js
// Feeding our component to connect HOC
export default connect()(Component);
```

**9. Map State to Props**

In our component file:
```js
const mapStateToProps = reducers => {
  // Left of the colon = desired name for the prop
  // Right of the colon = the slice of state we are going to map to that prop
  return {
    exampleProp1: reducers.sliceName1,
    exampleProp2: reducers.sliceName2,
  }
}
```
At the bottom of our component:
```js
// Passing `mapStateToProps` function to `connect` [first argument]
export default connect(mapStateToProps)(Component);
```

**10. Connect Action Creators to Component**

In our component file:
```js
// Importing our action creators from the file they were exported from
import { exampleFunc1, exampleFunc2, exampleFunc3 } from './pathToActions';
```
At the bottom of our component:
```js
// Passing our action creators to `connect` [second argument]
export default connect(
  mapStateToProps, 
  { exampleFunc1, exampleFunc2, exampleFunc3 }
)(Component);
```

**11. Access State Through Props**

In our component file:
```jsx
// Interpolating our state from Redux that we received as a prop
<div>{ props.exampleProp1 }</div>
```

**12. Use Action Creators**

In our component file:
```jsx
// Using our action creator on button click!
<button onClick={props.exampleFunc1}>Example</button>
```
