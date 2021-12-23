import { types } from "../types/types";

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case types.register:
            return {
                ...state,
                newUser: action.payload
            }
        default:
            return state
    }
}