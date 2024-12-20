import { FaPencilAlt, FaTrashAlt, FaUpload } from 'react-icons/fa';
import css from './Table.module.css';

const Table = ({ data, handleDelete }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Notes</th>
            <th>Upload</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.rating}</td>
              <td>{item.notes}</td>
              <td className={css.tdUpload}>
                <span>
                  <button className={css.tdButton}>
                    <FaUpload />
                  </button>
                </span>
              </td>
              <td className={css.tdIcons}>
                <span>
                  <button
                    className={css.tdButton}
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrashAlt />
                  </button>
                </span>
                <span>
                  <button className={css.tdButton}>
                    <FaPencilAlt />
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
