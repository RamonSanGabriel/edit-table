import { useState } from 'react';
import './App.css';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';
import AddBtn from './components/AddBtn/AddBtn';
import Footer from './components/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import NotesModal from './components/NotesModal/NotesModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [notesModalOpen, setNotesModalOpen] = useState(false);
  const [data, setData] = useState([
    {
      name: 'Ramon',
      description: 'Agent',
      rating: 'Bad',
      notes: '',
      upload: '',
      actions: '',
    },
    {
      name: 'Klarese',
      description: 'Owner',
      rating: 'Good',
      notes: '',
      upload: '',
      actions: '',
    },
    {
      name: 'Trevi',
      description: 'Guest',
      rating: 'Pending',
      notes: '',
      upload: '',
      actions: '',
    },
  ]);

  const handleDelete = (index) => {
    const deletedItem = data[index];
    setData(data.filter((_, indexDel) => indexDel !== index));
    toast.success(
      <>
        <b>{deletedItem.name} </b> &nbsp; was successfully deleted
      </>,
      {
        style: {
          border: '1px solid hsl(0, 100%, 47%)',
          padding: '16px',
          color: 'hsl(0, 100%, 47%)',
        },
        iconTheme: {
          primary: 'hsl(0, 100%, 90%)',
          secondary: 'hsl(0, 100%, 47%)',
        },
      }
    );
    console.log(deletedItem.name);
  };

  const handleNewData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div className="appContainer">
      <Toaster position="top-right" />
      <h2>Shore Residences Record</h2>
      <Table
        data={data}
        handleDelete={handleDelete}
        setNotesModalOpen={setNotesModalOpen}
      />
      <AddBtn setModalOpen={setModalOpen} />
      {/* <Modal /> */}
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleNewData}
        />
      )}
      {notesModalOpen && (
        <NotesModal
          closeModal={() => {
            setNotesModalOpen(false);
          }}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
