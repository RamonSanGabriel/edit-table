import { useState } from 'react';
import './App.css';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';
import AddBtn from './components/AddBtn/AddBtn';
import Footer from './components/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState([
    {
      name: 'Agent name',
      description: 'This is an agent',
      review: 'Bad',
      upload: '',
      actions: '',
    },
    {
      name: 'Owner name',
      description: 'This is an owner',
      review: 'Good',
      upload: '',
      actions: '',
    },
    {
      name: 'Guest name',
      description: 'This is a guest',
      review: 'Pending',
      upload: '',
      actions: '',
    },
  ]);

  const handleDelete = (index) => {
    setData(data.filter((_, indexDel) => indexDel !== index));
    // toast.success('Deleted successfully');
    toast.success(
      <span>
        <b>Deleted</b> successfully
      </span>,
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
  };

  return (
    <div className="appContainer">
      <Toaster position="top-right" />
      <h1>React Editable Table</h1>
      <Table data={data} handleDelete={handleDelete} />
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
