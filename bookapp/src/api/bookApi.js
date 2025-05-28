import axios from "axios";

export const API_SERVER_HOST = "http://localhost:5173/api/books"

export const getList = async () => {
    const res = await axios.get(API_SERVER_HOST);
    return res.data;
};
export const getBook = () => { };
export const postList = () => { };
export const putList = () => { };
export const removeList = () => { };
