import { useEffect, useState } from "react";

const GetProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        console.log('Fetching...');
        fetch('http://127.0.0.1:8000/api/cards/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
    }, [])
}

export default GetProducts