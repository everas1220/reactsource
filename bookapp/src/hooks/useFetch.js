import { useEffect } from "react";
import { getList } from "../api/bookApi";

export const useFetch = () => {
    useEffect(() => {
        getList().then((data) => {
            console.log(data);

        });
    }, []);
};