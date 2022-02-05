
import { GET_PRODUCT, USERS_ERROR, ADD_CART,ADD_QTY,REMOVE_ITEM,REMOVE_QTY } from '../type'
import axios from 'axios'

export const getProduct = () => async dispatch => {

    try {
        const res = await axios.get(`https://dnc0cmt2n557n.cloudfront.net/products.json`)
        dispatch({
            type: GET_PRODUCT,
            payload: res.data.products
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: e,
        })
    }

}

export const addToCart = (productId) => {
    return {
        type: ADD_CART,
        payload: productId
    }
}
export const removeQty = (productId) => {
    return {
        type: REMOVE_QTY,
        payload: productId
    }
}

export const addQty = (productId) => {
    return {
        type: ADD_QTY,
        payload: productId
    }
}

export const removeItem = (productId) => {

    return {
        type: REMOVE_ITEM,
        payload: productId
    }
}