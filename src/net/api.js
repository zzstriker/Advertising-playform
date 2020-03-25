import { http } from "./http"

const { get, post } = http;
//get
export const getTest = async (params) => {
    return await get(`/getTest?index=${params}`);
};
//post
export const postTest = async (params) => {
    return await post('/postTest', {params});
};