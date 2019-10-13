import React from 'react';

import Posts from './containers/Posts'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Posts</h2>
      </div>
      <Posts />
    </div>
  )
}

export default App;
