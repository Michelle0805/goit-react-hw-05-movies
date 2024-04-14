import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieListItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <li className={css.movieItem} key={id}>
      <Link
        to={`/goit-react-hw-05-movies/movies/${id}`}
        state={{ from: location }}
        className={css.movieLink}
      >
        <h3>{title}</h3>
      </Link>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};