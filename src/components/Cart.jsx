import Badge from "@mui/material/Badge"
import IconButton from "@mui/material/IconButton"
import Popover from "@mui/material/Popover"
import { ShoppingCart } from "@mui/icons-material"
import { connect } from "react-redux"
import { useState } from "react"
import CartItem from "./CartItem"
import './Cart.css';
import { Button } from "@mui/material"
import { ClearCart } from "../config/actions/product"

function Cart(props) {

    const Products = props.products.product;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenProductsCarts = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleCloseProductsCarts = (event) => {
        setAnchorEl(null);
    }

    const total_price = []

    function handlePriceTotal() {
        const initialValue = 0;
        const totalValue = total_price.reduce(
            (previousValue, currentValue) => previousValue + currentValue, initialValue)

        const totalValueFormatedBRL = totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

        return totalValueFormatedBRL;
    }

    function ClearCart() {
        props.clearCart(Products);
    }

    return (
        <div>
            <Badge badgeContent={Products.length} color="success">
                <IconButton
                    onClick={handleOpenProductsCarts}
                >
                    <ShoppingCart />
                </IconButton>
            </Badge>

            <Popover className="menu-cart"
                id='menu-app'
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}

                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}

                open={Boolean(anchorEl)}
                onClose={handleCloseProductsCarts}
            >
                {Products.length <= 0 ?
                    <h3
                        style={
                            {
                                margin: "1rem",
                                color: "#808080"
                            }
                        }
                    >
                        Carrinho Vazinho
                    </h3> :
                    <div className='content-cart'>
                        {Products.map((value, key) => {
                            total_price.push(value.subtotal)

                            return (
                                <div key={key} >
                                    <CartItem DataCart={value} />
                                </div>
                            )
                        })}
                        ___________________

                        <div className='price-final'>
                            <h3>Preço Total: {handlePriceTotal()}</h3>
                        </div>

                        <Button
                            onClick={ClearCart}
                            size="small"
                            variant="contained"
                            color="success"
                            sx={{ mt: 2 }}
                        >
                            Esvaziar Carrinho
                        </Button>
                    </div>
                }
            </Popover>
        </div >
    )
}

function mapToStoreProps(state) {
    return {
        products: state.product
    }
}

function mapDispatchProps(dispatch) {
    return {
        clearCart(product) {
            const action = ClearCart(product);
            dispatch(action);
        }
    }
}

export default connect(mapToStoreProps, mapDispatchProps)(Cart);