import React from 'react';
import './App.css'; // Import global styles
import FormBuilder from './components/FormBuilder/FormBuilder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Form Builder</h1>
      </header>
      <main>
        <FormBuilder />
      </main>
    </div>
  );
}

export default App;
