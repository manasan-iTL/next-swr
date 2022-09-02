import axios from "axios";

export const fetcher = (url: string) => fetch(url).then(res => res.json())

export const axiosFetcher = (url: string) => axios.get(url).then(res => res.data)