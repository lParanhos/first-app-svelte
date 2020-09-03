
import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";

import MovieSearch from "../Movies/MovieSearch.svelte";

import { fetchMovies, resetMovies } from "../../api/movie-api";
import { store, INITIAL_STATE } from "../../store";

jest.mock("../../api/movie-api");

describe('MovieSearch', () => {
 afterEach(() => {
    jest.resetAllMocks();
 })

 it('renders a form control', () => {
    const { getByTestId } = render(MovieSearch);
    
    expect(getByTestId("search-form")).toBeInTheDocument();
 });

 it('renders a input control', () => {
    const { getByTestId } = render(MovieSearch);
    
    expect(getByTestId("search-input")).toBeInTheDocument();
 });

it('executes fetchMovies when form is submitted', async () => {
    const { getByTestId } = render(MovieSearch);

    const form = getByTestId("search-form");
    const input = getByTestId("search-input");

    await fireEvent.input(input, { target: { value: "men" } });
    await fireEvent.submit(form);


    expect(fetchMovies).toHaveBeenCalled();
    expect(fetchMovies).toHaveBeenCalledWith("men")
 });

 it('executes resetMovies when term is cleared after being something else than empty string', async () => {
    store.set({
        INITIAL_STATE,
        wasSearched: true
    });
    
    const { getByTestId } = render(MovieSearch);
    
    const input = getByTestId("search-input");

    await fireEvent.input(input, { target: { value: "men" } });
    await fireEvent.input(input, { target: { value: "" } });

    expect(resetMovies).toHaveBeenCalledTimes(2);
 });
});