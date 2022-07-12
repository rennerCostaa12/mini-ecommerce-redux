import {
    INSERT_PRODUCT_CART,
    CLEAR_CART,
    DELETE_ITEM_CART,
    INCREMENT_QNT_PRODUCT,
    DECREMENT_QNT_PRODUCT
} from "../typesActions/typesActions"

export function InsertCart(product) {
    return {
        type: INSERT_PRODUCT_CART,
        payload: product
    }
}

export function ClearCart(product) {
    return {
        type: CLEAR_CART,
        payload: product
    }
}

export function DeleteProduct(Id) {
    return {
        type: DELETE_ITEM_CART,
        payload: Id
    }
}

export function IncrementQntProduct(dataCart, qntProduct) {
    return {
        type: INCREMENT_QNT_PRODUCT,
        payload: {
            dataCartIncrement: dataCart,
            qntProductIncrement: qntProduct
        }
    }
}

export function DecrementQntProduct(dataCart, qntProduct) {
    return {
        type: DECREMENT_QNT_PRODUCT,
        payload: {
            dataCartDecrement: dataCart,
            qntProductDecrement: qntProduct
        }
    }
}