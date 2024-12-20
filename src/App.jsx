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
      name: 'Ramon',
      description: 'Agent',
      rating: 'Bad',
      notes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus libero minima placeat ducimus nihil repudiandae laborum fuga adipisci. Dolorem veritatis expedita assumenda. Nihil doloribus minima fuga quis enim quas.',
      upload: '',
      actions: '',
    },
    {
      name: 'Klarese',
      description: 'Owner',
      rating: 'Good',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta minima dignissimos, ipsum dolorum debitis vitae pariatur? Eveniet, aperiam voluptas.',
      upload: '',
      actions: '',
    },
    {
      name: 'Trevi',
      description: 'Guest',
      rating: 'Pending',
      notes:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia architecto vel, vero modi harum, veniam unde earum tempore, voluptas quo similique ducimus nostrum non magnam. Recusandae deserunt architecto cum.',
      upload: '',
      actions: '',
    },
  ]);

  const handleDelete = (index) => {
    const deletedItem = data[index];
    setData(data.filter((_, indexDel) => indexDel !== index));
    toast.success(
      <>
        <b>{deletedItem.name} </b> &nbsp; was deleted
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
      <h1>React Editable Table</h1>
      <Table data={data} handleDelete={handleDelete} />
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
      <Footer />
    </div>
  );
}

export default App;
