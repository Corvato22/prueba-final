import { types } from '../types/types';
const axios = require('axios');


export function getDataAsync() {
    return function (dispatch) {
        return axios.get("https://recipe-rissoto.vercel.app/recipe")
            .then(({ data }) => {
                dispatch(getDataSync(data));
            }).catch(function (error) {
                console.log('No se pudo obtener la data', error);
            });
    };

}

export const getDataSync = (data) => {
    return {
        type: types.getData,
        payload: data
    }
}