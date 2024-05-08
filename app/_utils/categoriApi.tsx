import axiosClient from "./axiosClient";


const getAllGategories = () => axiosClient.get(`/categories`);
const getCategoryProducts = (slug: string) => axiosClient.get(`/categories/${slug}`);

export default {
    getAllGategories,
    getCategoryProducts
}