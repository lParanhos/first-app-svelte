import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";

import Movies from "../Movies/Movies.svelte";

describe('Movie', () => {
    it('mounts MovieSearch and MovieList', () => {
       const { getByTestId } = render(Movies);

       expect(getByTestId("movie-search")).toBeInTheDocument();
       expect(getByTestId("movie-list")).toBeInTheDocument();
    });
});