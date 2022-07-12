import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button, CardActionArea, CardActions } from '@mui/material'
import { connect } from 'react-redux';
import { InsertCart } from '../config/actions/product';
import { PropaneSharp } from '@mui/icons-material';
import { AddShoppingCart } from '@mui/icons-material'

function Cards(props) {
    const AddCart = styled(Button)({
        backgroundColor: "#49c019",
        color: "#f1f1f1",
        '&:hover': {
            backgroundColor: "#29750b"
        }
    });

    const { imageProduct, nameProduct, descriptionProduct, ProductDetails } = props;

    const ButtonDetails = styled(Button)({
        backgroundColor: "#01833b",
        color: "#f1f1f1",
        '&:hover': {
            backgroundColor: "#014720",
        }
    })

    const Paragraph = styled(Typography)({
        color: '#747373',
        height: '70px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    })

    let list = []

    const Product = props.products.product;

    for (let x in Product) {
        list.push(Product[x].id)
    }

    function handleInsertProductCart() {


        if (!list.includes(ProductDetails.id)) {
            props.InsertItemCart(ProductDetails);
        } else {
            alert('Item já existe no carrinho!')
        }
    }

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="200"
                image={imageProduct}
                alt="Image Product"
            />
            <CardContent>
                <Typography variant="h5">
                    {nameProduct}
                </Typography>
                <Paragraph>
                    {descriptionProduct}
                </Paragraph>
            </CardContent>

            <CardActions>
                <AddCart title='Adicionar no carrinho' onClick={handleInsertProductCart}>
                    <AddShoppingCart />
                </AddCart>
                <ButtonDetails>
                    Ver Detalhes
                </ButtonDetails>
            </CardActions>
        </Card>
    )
}

function mapToStoreProps(state) {
    return {
        products: state.product
    }
}

function mapToDispatchProps(dispatch) {
    return {
        InsertItemCart(product) {
            const action = InsertCart(product);
            dispatch(action);
        }
    }
}

export default connect(mapToStoreProps, mapToDispatchProps)(Cards);