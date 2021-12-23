import { types } from '../types/types';

export const addTotal = (ingredient) => {
    return {
        type: types.addTotal,
        payload: ingredient
    }
}

export const subsTotal = (ingredient) => {
    return {
        type: types.subsTotal,
        payload: ingredient
    }
}