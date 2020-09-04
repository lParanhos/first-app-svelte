import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";

import MovieCard from "../Movies/MovieCard.svelte";

import MoviesMock from "../../mocks/movie.json";

describe('Movie', () => {
    it('renders the movie poster with proper data', () => {
       const [movie] = MoviesMock.results;

       const { getByAltText } = render(MovieCard, { movie });

       const image = getByAltText(`Poster: ${movie.title}`);

       expect(image).toBeInTheDocument();
       expect(image).toHaveProperty(
           "src",
           "https://image.tmdb.org/t/p/original/1GJvBE7UWU1WOVi0XREl4JQc7f8.jpg"
       )
    });

    it('renders movie card with all relevant content', () => {
       const [movie] = MoviesMock.results;
       
       movie.friendly_date = new Date(movie.release_date).toLocaleDateString();

       const { getByText } = render(MovieCard, { movie });

       expect(getByText('Men in Black')).toBeInTheDocument();

       ["com 9868 votos", "7.1", "1997-7-1", "and new recruit Agent Jay"].forEach(item => {
           expect(getByText(item, { exact: false })).toBeInTheDocument();
       })
    });
});