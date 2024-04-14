import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'pages/Shared/SharedLayout';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/Movie/MovieDetailsPage'));
const Page404 = lazy(() => import('pages/Page404'));

const CastList = lazy(() => import('./Cast/CastList'));
const ReviewsList = lazy(() => import('./Reviews/ReviewsList'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<MoviesPage />} />
          <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastList />} />
            <Route path="reviews" element={<ReviewsList />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};