import React from "react";
import useSWR from "swr";
import { fetcher, axiosFetcher } from "../fetch/fetch";

const useSearchBook = (book: string, submit: boolean) => {
    const API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes'
    const request_URL = `${API_ENDPOINT}?q=${book}`

    const { data, error } = useSWR(submit? request_URL: null, axiosFetcher) 
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useSearchBook