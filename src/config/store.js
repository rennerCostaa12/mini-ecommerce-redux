import { createStore, combineReducers } from "redux";
import Products from "./reducers/product";

const reducers = combineReducers({
    product: Products,
})

export default function storeConfig() {
    return createStore(reducers);
}