import axios from "axios";
import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(url);
                setData(data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData()
    }, [url,data]);

    return {data};
};

export default useFetch;
