import { useEffect, useState } from "react";

const RandomFactPage = () => {
    const [factList, setFactList] = useState([]);
    const max_page = 34; // As per API response data
    const RandomPage = Math.floor(Math.random() * max_page) + 1;

    useEffect(() => {
        const fetchListData = async () => {
            try {
                const response = await fetch(`https://catfact.ninja/facts?page=${RandomPage}`);
                const responseData = await response.json();
                setFactList(responseData.data);
            }
            catch (e) {
                throw new Error(e.message);
            }

        }
        fetchListData();
    }, [])

    return (
        <div>
            {(factList.length !== 0) && factList.map(list => (
                <li key={list.length}>{list.fact}</li>
            ))}
        </div>
    )
}

export default RandomFactPage;