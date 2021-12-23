import { types } from "../types/types";

const initialState = {
    product: '',
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.getData:
            return {
                product: action.payload
            }
        default:
            return state;
    }
}