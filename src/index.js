import React from 'react';
import ReactDOM from 'react-dom';

// Create a mew component that produces HTML
const App = () => {
  return <div>What's up my G?!</div>;
}

// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
