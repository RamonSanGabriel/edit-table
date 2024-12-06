import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="appContainer">
      <h1>React Editable Table</h1>
      <Table />
      <Modal />
    </div>
  );
}

export default App;
