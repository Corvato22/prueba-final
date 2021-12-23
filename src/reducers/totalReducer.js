import { types } from "../types/types";

const initialState = {
    total: [],
}

export const totalReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.addTotal:
            let newTotal = [...state.total]               //* Clona el array del estado inicial del carrito para que no se afecte al pushear el objeto agregado.
            newTotal.push(action.payload)
            return {
                ...state,
                total: newTotal
            }

        case types.subsTotal:
            let newTotal2 = [...state.total]              //* Clona el array del estado inicial del carrito para que no se afecte al pushear el objeto agregado.
            let indexFound = newTotal2.findIndex((element) => element.id === action.payload.id)  //*Encuentra el índice de lo que hay que sacar  // Return implicito // Un payload es como pasar un parámetro a una función que está en un reducer.
            newTotal2 = newTotal2.filter((element, index) => index !== indexFound) //* "No me saque ninguno que sea diferente al indice encontrado"
            return {
                ...state,
                total: newTotal2
            }
        default:
            return state;
    }
}