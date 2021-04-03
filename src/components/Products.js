import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import style from 'styled-components';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const Card = styled('div')({
    margin: '20px',
    paddingTop: '4px',
    heigth: '180px',
    width: '200px',
    borderRadius:'10px',
    boxShadow: '4px 4px 4px orange'
});

const CardFoto = styled('div')({
    heigth: '70%',
    width: '200px',
});
const Conteudo = style.div`
    height: 120px;`

const ButtonAddCart = style.div`
    height: 10%;
    width: 200px;
    display: flex;
    flex-direction: row-reverse;`

export default class Products extends React.Component {

    render() {
        const product = this.props.products
        
        return (
        <Card >
            <CardActionArea>
                <CardFoto>
                    <CardMedia
                        component="img"
                        alt={product.name}
                        height="100px"
                        image={product.photos}
                        title={product.id}
                    />
                </CardFoto>
                <Conteudo>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Categoria: {product.category}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Preço: R${product.price},00
                        </Typography>
                    </CardContent>
                </Conteudo>
            </CardActionArea>
            <ButtonAddCart>
                <IconButton onClick={() => this.props.onClickAddCart(product)} 
                color="primary" 
                aria-label="add to shopping cart"
                style={{ fontSize: 20 }} >
                    <AddShoppingCartIcon/>
                </IconButton>
            </ButtonAddCart>
            
        </Card>
  );
}
}
//             <div>
//                 <img src={product.photos}/>
//                 <div>
//                     <p>Nome: {product.name}</p>
//                     <p>Descrição: {product.description}</p>
//                     <p>Categoria: {product.category}</p>
//                     <p>Preço: R${product.price},00</p>
//                     <button onClick={() => this.props.onClickAddCart(product)}> Add ao carrinho</button>
//                     <hr />
//                 </div>

//             </div>
