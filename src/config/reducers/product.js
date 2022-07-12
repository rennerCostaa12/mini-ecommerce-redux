import {
    INSERT_PRODUCT_CART,
    CLEAR_CART,
    DELETE_ITEM_CART,
    INCREMENT_QNT_PRODUCT,
    DECREMENT_QNT_PRODUCT
} from "../typesActions/typesActions"

const initalState = {
    product: []
}

export default function Products(state = initalState, action) {

    switch (action.type) {
        case INSERT_PRODUCT_CART:
            return {
                ...state,
                product: [...state.product, action.payload]
            }

        case DELETE_ITEM_CART:
            const newListRemoved = state.product.filter((elem) => elem.id !== action.payload);

            return {
                ...state,
                product: newListRemoved
            }

        case INCREMENT_QNT_PRODUCT:
            const { dataCartIncrement, qntProductIncrement } = action.payload
            const newListIncrement = [...state.product];

            const newQntProductIncrement = qntProductIncrement + 1

            const newProductIncrement = newListIncrement.map(object => {
                if (object.id === dataCartIncrement.id) {
                    object.quantity = newQntProductIncrement
                    object.subtotal = dataCartIncrement.price * newQntProductIncrement
                }

                return object
            })

            return {
                ...state,
                product: newProductIncrement
            };

        case DECREMENT_QNT_PRODUCT:
            const { dataCartDecrement, qntProductDecrement } = action.payload;
            const newListDecrement = [...state.product];

            const newQntProductDecrement = qntProductDecrement - 1;

            const newProductDecrement = newListDecrement.map(object => {
                if (object.id === dataCartDecrement.id) {
                    object.quantity = newQntProductDecrement
                    object.subtotal = dataCartDecrement.price * newQntProductDecrement
                }

                return object;
            })

            return {
                ...state,
                product: newProductDecrement
            }

        case CLEAR_CART:
            return {
                ...state,
                product: []
            }

        default: return state;
    }
}