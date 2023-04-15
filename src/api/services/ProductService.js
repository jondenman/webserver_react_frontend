import { client } from "../client";

const getAllProducts = (afterComplete) => {
    client.get('cards/')
    .then(response => {
        console.log(response.data.cards);
        afterComplete(response.data.cards);
    });
};

export default getAllProducts;