import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    width:300,
    
  },
});

const Card = styled.div`
  margin: 20px;
  padding-top: 4px;
  height: 70vh;
  width: 200px;
  border-radius:10px;
  box-shadow: 4px 4px 4px orange;
`

const CardPhoto = styled.div`
  height: 70%;
  width: 100%;
`

const Content = styled.div`
    /* height: 120px; */
    display: flex;
    height:280px;
  `

const DivDelete = styled.div`
    height: 10%;
    width: 20px;
    display: relative;
    margin-top: 70%;
    margin-left: 220px;
    position: absolute;
    flex-direction: row-reverse;
    z-Index: 8;
`

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardPhoto>
          <CardMedia
            component="img"
            alt="Product Image"
            height="200"
            image={props.image}
            title={props.name}
          />
        </CardPhoto>
        <Content>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>Descrição: {props.description}</p>
              <p>Preço: R${props.price}</p>
              <p>Método de Pagamento: {props.payment}</p>
              <p>Categoria: {props.category}</p>
              <p>Parcelas: {props.installments}</p>
            </Typography>
            
          </CardContent>
              <DivDelete>
                <Button size="small" color="primary" onClick={()=>props.delete(props.id)}>
                <DeleteIcon/>            
              </Button>
            </DivDelete>
        </Content>
      </CardActionArea>
    </Card>
  );
}


