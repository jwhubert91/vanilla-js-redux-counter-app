// Link to video: https://www.youtube.com/watch?v=6Zf29n9PL3k
// Stopped on 2/19/2022 @ 15:21

// DOM Selectors
const addButtonEl = document.querySelector('#add-button');
const subtractButtonEl = document.querySelector('#minus-button');
const resetButtonEl = document.querySelector('#reset-button');
const counterEl = document.querySelector('#counter-text');

// Initialize the Store
const state = { count: 0, creator: 'James', dateTime: 0 };
const store = Redux.createStore(counter, state);

console.log(store);

// Reducer
function counter(currentState, action){
  const nextState = {
    ...currentState,
    dateTime: Date.now(),
    count: currentState.count,
  }
  switch (action.type) {
    case 'ADD':
      nextState.count = currentState.count + 1;
      return nextState;
      break;
    case 'SUBTRACT':
      nextState.count = currentState.count - 1;
      return nextState;
      break;
    case 'RESET':
      nextState.count = 0;
      return nextState;
      break;
    default:
      return currentState;
  }
}

// A subscriber callback - we call it render
function render() {
  console.log(store.getState())
  const { count } = store.getState();
  counterEl.innerHTML = count.toString();
}

// A subscriber to changes in our store
store.subscribe(render);

// Actions
addButtonEl.addEventListener('click', function() {
  store.dispatch({ type: 'ADD' })
})

subtractButtonEl.addEventListener('click', function() {
  store.dispatch({ type: 'SUBTRACT' })
})

resetButtonEl.addEventListener('click', function() {
  store.dispatch({ type: 'RESET' })
})

/*

  REDUX STATE MANAGEMENT

  A. Create Initial State
    - First, initialize your state. This can be an array or JS object.
  B. Create a Reducer
    - Second, create a reducer function. It is a plain JS function but traditionally takes in 2 arguments:
      (1) - The current state
      (2) - An action
    - In the reducer, create a switch statement where we evaluate the value of (action.type)
    - For each possible value of action.type (these are strings), return what the next state will be from the switch statement
    - You also need a default case which should return the original state
  C. Initialize the Redux Store
    - Next, bring in the createStore() method from Redux
    - In createStore() pass in (1) the reducer, and (2) the initial state you created as arguments
    - Initialize the store to a variable, traditionally called store
  D. Dispatch Actions to Store
    - These are callbacks to some event in your app- often a user event- which dispatches an action to your reducer via the dispatch() method available on your initialized store
  E. (Optional) Create Subscriber
    - Your initialized store has a subscribe() method available which can be used to subscribe to changes in the store

*/