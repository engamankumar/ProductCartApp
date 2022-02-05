import { GET_PRODUCT, ADD_CART, ADD_QTY, REMOVE_QTY, REMOVE_ITEM } from '../type'

const initialState = {
    product: [],
    loading: true,
    shoppingCart: []
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_PRODUCT:
            action.payload.forEach((data) => data['qty'] = 1);
            var shoppingCart = (state.shoppingCart.length > 0) ? [...state.shoppingCart] : [...action.payload]
            return {
                ...state,
                product: action.payload,
                shoppingCart: shoppingCart,
                loading: true

            }
        case ADD_CART:
            if (state.shoppingCart && state.shoppingCart.findIndex((pid) => pid.id === action.payload) != -1) {
                state.shoppingCart.forEach((data) => {
                    if (data.id === action.payload) {
                        data['qty'] = (data['qty']) ? data['qty'] + 1 : 1
                    }
                })
                return {
                    ...state,
                    shoppingCart: [...state.shoppingCart]

                }
            } else {
                shoppingCart = [...state.product.filter((pid) => pid.id === action.payload)];
                (shoppingCart.length > 0) ? shoppingCart[0]['qty'] = 1 : [];
                return {
                    ...state,
                    shoppingCart: [...state.shoppingCart, ...shoppingCart]

                }
            }

        case REMOVE_QTY:
            if (state.shoppingCart && state.shoppingCart.findIndex((pid) => pid.id === action.payload) != -1) {
                var shoppingCart = [];
                state.shoppingCart.forEach((data) => {
                    if (data.id === action.payload) {
                        data['qty'] = (data['qty'] && data['qty'] != 1) ? data['qty'] - 1 : 0
                    }
                    if (data['qty'] != 0) {
                        shoppingCart.push(data)
                    }
                })
                return {
                    ...state,
                    shoppingCart: [...shoppingCart]

                }
            } else {
                return {
                    ...state,
                    shoppingCart: []

                }
            }
        case REMOVE_ITEM:
            var shoppingCart = [...state.shoppingCart];
            shoppingCart = shoppingCart.filter((item) => item.id !== action.payload)
            return {
                ...state,
                shoppingCart: [...shoppingCart]
            }

        default: return state
    }

}