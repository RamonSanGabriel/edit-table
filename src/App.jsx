import { useState } from 'react';
import './App.css';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';
import AddBtn from './components/AddBtn/AddBtn';
import Footer from './components/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import NotesModal from './components/NotesModal/NotesModal';
import Header from './components/Header/Header';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [notesModalOpen, setNotesModalOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const [data, setData] = useState([
    {
      name: 'Trevi',
      description: 'Guest',
      rating: 'Good',
      notes: 'This is sample 1.',
      upload: '',
      actions: '',
    },
    {
      name: 'Klaire',
      description: 'Owner',
      rating: 'Pending',
      notes: 'This is sample 2.',
      upload: '',
      actions: '',
    },
    {
      name: 'Mon',
      description: 'Agent',
      rating: 'Bad',
      notes: 'This is sample 3.',
      upload: '',
      actions: '',
    },
  ]);

  const handleDelete = (index) => {
    const deletedItem = data[index];
    setData(data.filter((_, indexDel) => indexDel !== index));
    toast.success(
      <>
        <b>{deletedItem.name}</b> &nbsp; was successfully deleted
      </>,
      {
        style: {
          border: '1px solid hsl(0, 100%, 47%)',
          padding: '1rem',
          color: 'hsl(0, 100%, 47%)',
        },
        iconTheme: {
          primary: 'hsl(0, 100%, 90%)',
          secondary: 'hsl(0, 100%, 47%)',
        },
      }
    );
    // console.log(deletedItem.name);
  };

  const handleEdit = (index) => {
    const editedItem = data[index];
    setEdit(index);

    setModalOpen(true);
  };

  const handleNewData = (newData) => {
    setData([...data, newData]);
  };

  const handleModalNotes = (item) => {
    const contentItem = data.notes[item];
    setData(data.find((note) => note !== item));
    return contentItem;
  };

  return (
    <div className="appContainer">
      <Toaster position="top-right" />
      <Header />
      <Table
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
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
          edit={edit !== null && data[edit]}
        />
      )}
      {notesModalOpen && (
        <NotesModal
          data={data}
          handleModalNotes={handleModalNotes}
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
