import { client } from "../client";

export const getAllProducts = (afterComplete) => {
    client.get('cards/')
    .then(response => {
        console.log(response.data.cards);
        afterComplete(response.data.cards);
    });
};

const getProduct = (afterComplete, id) => {
    client.get(`cards/${id}`)
    .then(response => {
        console.log(response.data.card);
        afterComplete(response.data.card);
    })
}

const api = {
    getAllProducts: getAllProducts,
    getProduct: getProduct
}
export default api;