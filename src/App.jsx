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
  const [data, setData] = useState([
    {
      name: 'Trevi',
      description: 'Guest',
      rating: 'Good',
      notes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque? Esse sint mollitia, optio, pariatur officiis cupiditate velit delectus debitis libero corrupti nobis in atque ab autem a dolorum quae recusandae maxime sequi maiores consectetur aspernatur voluptatibus ipsa. Rem provident eos commodi laborum. Enim ex, totam autem consequatur itaque inventore rem vero provident voluptate harum quasi iusto dolore. Deleniti, fugit.',
      upload: '',
      actions: '',
    },
    {
      name: 'Klaire',
      description: 'Owner',
      rating: 'Pending',
      notes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque? Esse sint mollitia, optio, pariatur officiis cupiditate velit delectus debitis libero corrupti nobis in atque ab autem a dolorum quae recusandae maxime sequi maiores consectetur aspernatur voluptatibus ipsa. Rem provident eos commodi laborum. Enim ex, totam autem consequatur itaque inventore rem vero provident voluptate harum quasi iusto dolore. Deleniti, fugit.',
      upload: '',
      actions: '',
    },
    {
      name: 'Mon',
      description: 'Agent',
      rating: 'Bad',
      notes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque? Esse sint mollitia, optio, pariatur officiis cupiditate velit delectus debitis libero corrupti nobis in atque ab autem a dolorum quae recusandae maxime sequi maiores consectetur aspernatur voluptatibus ipsa. Rem provident eos commodi laborum. Enim ex, totam autem consequatur itaque inventore rem vero provident voluptate harum quasi iusto dolore. Deleniti, fugit.',
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
    console.log(deletedItem.name);
  };

  const handleNewData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div className="appContainer">
      <Toaster position="top-right" />
      <Header />
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
