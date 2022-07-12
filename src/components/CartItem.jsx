import './CartItem.css';
import { RemoveCircle, AddCircle } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import {
    DeleteProduct,
    IncrementQntProduct,
    DecrementQntProduct
} from '../config/actions/product';

function CartItem(props) {
    const qntProductID = props.DataCart.quantity;
    const DataCart = props.DataCart;
    //const [qntProduct, setQntProduct] = useState(1);

    const priceProduct = DataCart.price * qntProductID;

    function handleAddProduct() {
        props.IncrementProduct(DataCart, qntProductID);
    }

    function handleRemoveProduct() {
        if (qntProductID > 1) {
            props.DecrementProduct(DataCart, qntProductID);
        }
    }

    function handleDeleteProduct() {
        props.DeleteItemCart(DataCart.id)
    }

    return (
        <>
            <div className='list-product'>
                <img src={DataCart.img} />
                <div>
                    <h3>{DataCart.name_product}</h3>
                    <h5>{priceProduct.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h5>
                </div>
            </div>
            <div className='content-counter-products'>
                <IconButton onClick={handleRemoveProduct}>
                    <RemoveCircle color='success' />
                </IconButton>

                <input type="number" min={0} value={qntProductID} readOnly />

                <IconButton onClick={handleAddProduct}>
                    <AddCircle color='success' />
                </IconButton>
                <div>
                    <Button
                        onClick={handleDeleteProduct}
                        variant='outlined'
                        color='error'
                    >
                        Remover Item
                    </Button>
                </div>
            </div>
        </>
    )
}

function mapToStoreProps(state) {
    return {
        product: state.product
    }
}

function mapDispatchProps(dispatch) {
    return {
        DeleteItemCart(id) {
            const action = DeleteProduct(id);
            dispatch(action);
        },
        IncrementProduct(dataCart, qntProduct) {
            const action = IncrementQntProduct(dataCart, qntProduct);
            dispatch(action);
        },
        DecrementProduct(dataCart, qntProduct) {
            const action = DecrementQntProduct(dataCart, qntProduct);
            dispatch(action);
        }
    }
}

export default connect(mapToStoreProps, mapDispatchProps)(CartItem)

