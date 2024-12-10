import { useState } from 'react';
import './App.css';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';
import AddBtn from './components/AddBtn/AddBtn';
import Footer from './components/Footer/Footer';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="appContainer">
      <h1>React Editable Table</h1>
      <Table />
      <AddBtn setModalOpen={setModalOpen} />
      {/* <Modal /> */}
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
