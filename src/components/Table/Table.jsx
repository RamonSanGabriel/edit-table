import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import css from './Table.module.css';

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Page</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home</td>
            <td className={css.tdDescription}>This is the home page</td>
            <td className={css.tdStatus}>Live</td>
            <td className={css.tdIcons}>
              <span>
                <button className={css.tdButton}>
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
          <tr>
            <td>About</td>
            <td className={css.tdDescription}>This is the About page</td>
            <td className={css.tdStatus}>Draft</td>
            <td className={css.tdIcons}>
              <span>
                <button className={css.tdButton}>
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
          <tr>
            <td>Services</td>
            <td className={css.tdDescription}>This is the Services page</td>
            <td className={css.tdStatus}>Approved</td>
            <td className={css.tdIcons}>
              <span>
                <button className={css.tdButton}>
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;
