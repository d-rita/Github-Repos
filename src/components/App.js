import React from 'react';
import '../styles/App.css';
import ReposPage from './ReposView';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ReposPage />
    </div>
  );
}

export default App;
