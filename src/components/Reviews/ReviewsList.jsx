import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'api/api';
// import Loader from 'components/Loader/Loader';
import css from './ReviewsList.module.css';

const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsFilms = async () => {
    try {
      const response = await fetchMovieReviews(movieId);
      setReviews(response);
    } catch (error) {
      console.error(error);
    }
    }
   
    fetchReviewsFilms();
  }, [movieId]);

  return (
    <>
    {reviews.length !== 0 ? (
      <div>
        <h2>Reviews</h2>
        <ul className={css.reviewsList}>
             {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
      </div>
    ) : (
      <div>We don't have any reviews for this movie.</div>
    )}
  </>
  );
};
export default ReviewsList;