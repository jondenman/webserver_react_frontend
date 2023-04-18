import { client } from "../client";

export const getAllProducts = (afterComplete) => {
    client.get('cards/')
    .then(response => {
        afterComplete(response.data.cards);
    });
};

const getProduct = (afterComplete, id) => {
    client.get(`cards/${id}`)
    .then(response => {
        afterComplete(response.data.card);
    })
    .catch(function (error) {
        if (error.response.status === 404) {
            afterComplete(404)
        }
    })
}

const api = {
    getAllProducts: getAllProducts,
    getProduct: getProduct
}
export default api;