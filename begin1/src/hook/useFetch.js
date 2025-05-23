import { useEffect, useState } from "react";

//아래의 코드는 자주 사용되는 코드
export const useFetch = (url) => {
    console.log("url", url);
    const [data, setData] = useState(null);
    const fetchData = async () => {
        const res = await fetch(url);
        const result = await res.json();
    }
    useEffect(() => {
        //비동기 => 동기식으로 실행
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const result = await res.json();
                setData(result.dtoList);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, error, loading };
};