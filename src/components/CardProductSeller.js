import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
    height:530,
  },
});

const DivDelete = styled.div`
  display:flex;
  flex-direction:flex-end;
`

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Product Image"
          height="200"
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Descrição: {props.description}</p>
            <p>Preço: R${props.price}</p>
            <p>Método de Pagamento: {props.payment}</p>
            <p>Categoria: {props.category}</p>
            <p>Parcelas: {props.installments}x</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <DivDelete>
        <Button size="small" color="primary" onClick={()=>props.delete(props.id)}>
              <DeleteIcon/>            
        </Button>
        </DivDelete>
      </CardActions>
    </Card>
  );
}


