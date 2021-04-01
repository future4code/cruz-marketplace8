import React from 'react';
import axios from 'axios';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import {baseUrl, categories, paymentMethod, installments} from '../parameters'
import CardProductSeller from './CardProductSeller'
import HeaderSeller from './HeaderSeller'
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';

const DivAddProduct = styled.div`
    /* display: flex; */
    flex-direction:column;
    margin:8px;
    width:200px;
    margin-top: 100px;
`
const Inputs = styled.input`
    margin-left:0px;
    margin-right:10px;
`
const Selects = styled.select`
    margin-left:0px;
    margin-right:10px;
`
const DivLinha1 = styled.div`
    float: left;
    height: 300px;/*Altura da linha*/
`
const DivLinha2 = styled.div`
    border-left: 2px solid; 
    color:orange;
    box-sizing: border-box;
`

const DivProducts = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin:8px;
    margin-left:150px;
`
const DivAll = styled.div`
    display:flex;
`
const DivCard = styled.div`
    margin:15px;
`

const DivIcons = styled.div`
    display:flex;
    justify-content: flex-end;
    grid-column:3;
    grid-row:3;
`
const Pinputs = styled.p`
    color: #F29803;
`

const DivBotton = styled.div`
    margin-top:20px;
`

export default class Seller extends React.Component {
    state = {
        products:[],
        name:'',
        category:'',
        image:'',
        description:'',
        payment:'',
        price:'',
        installments:''
    }

    componentDidMount () {
        this.getAllProducts()
    }

    getAllProducts = async() => {
        try {
            const response = await axios.get(baseUrl)
            this.setState({products: response.data.products})
            console.log(response.data.products.photos)
        } catch(err) {
            console.log(err)
        }
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handleCategory = (e) => {
        this.setState({category: e.target.value})
    }

    handleImage = (e) => {
        this.setState({image: e.target.value})
    }

    handleDescription = (e) => {
        this.setState({description: e.target.value})
    }

    handlePayment = (e) => {
        this.setState({payment: e.target.value})
    }

    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }

    handleInstallments = (e) => {
        this.setState({installments: e.target.value})
    }

    createProduct = async () => {
        const body = {
                "name": this.state.name,
                "description": this.state.description,
                "price": this.state.price,
                "paymentMethod": this.state.payment,
                "category": this.state.payment,
                "photos": [this.state.image],
                "installments": this.state.installments
        }

        try {
            const response = await axios.post(baseUrl,body)
            this.setState({name:'', category:'', image:'', description:'', payment:'',         price:'',
            installments:''})
            this.getAllProducts()
        } catch(err) {
            console.log(err)
        }
    }

    deleteProduct = async(id) => {
        try {
            const response = await axios.delete(`${baseUrl}/${id}`)
            console.log(response)
            this.getAllProducts()
        } catch(err) {
            console.log(err)
        }
    }

    render () {
        const product = this.state.products.map((product)=>{
            return (
                <DivCard className='top' key={product.id}>
                    <CardProductSeller name={product.name} image={product.photos}
                                    description={product.description} price={product.price}
                                    payment={product.paymentMethod} installments={product.installments}
                                    category={product.category} id={product.id}
                                    delete={this.deleteProduct}/>
                    {/* <button onClick={()=>this.deleteProduct(product.id)}>Deletar</button>                                 */}
                </DivCard>
            )
        })

        const categoryOptions = categories.map((p) => {
            return (
                <option>
                    {p}
                </option>
            )
        })

        const paymentOptions = paymentMethod.map((p) => {
            return (
                <option>
                    {p}
                </option>
            )
        })

        const installmentsOptions = installments.map((p) => {
            return (
                <option>
                    {p}
                </option>
            )
        })

        return (
        <div>
                        
                    <DivAll>
                        
                        <DivAddProduct>
                            <Pinputs>Nome:</Pinputs>
                            <Inputs value={this.state.name} onChange={this.handleName} placeholder={"Nome"}/>
                            
                            <Pinputs>Categoria:</Pinputs>
                            <Selects
                                    value={this.state.category} 
                                    onChange={this.handleCategory}>
                                    <option>Categoria</option>
                                    {categoryOptions}
                            </Selects>
                            
                            <Pinputs>Tipo de Pagamento:</Pinputs>
                            <Selects
                                    value={this.state.payment} 
                                    onChange={this.handlePayment}>
                                    <option>Tipo de Pagamento</option>
                                    {paymentOptions}
                            </Selects>
                            
                            <Pinputs>Parcelas:</Pinputs>
                            <Selects
                                    value={this.state.installments} 
                                    onChange={this.handleInstallments}>
                                    <option>Nº de parcelas</option>
                                    {installmentsOptions}
                            </Selects>

                            <Pinputs>Preço:</Pinputs>
                            <Inputs value={this.state.price} onChange={this.handlePrice}  placeholder={"Preço"}/>
                            
                            <Pinputs>Url da Imagem</Pinputs>
                            <Inputs value={this.state.image} onChange={this.handleImage}  placeholder={'Imagem'}/>
                            
                            <Pinputs>Descrição do produto:</Pinputs>
                            <Inputs value={this.state.description} onChange={this.handleDescription}  placeholder={'Descrição'}/>
                            
                            <DivBotton>
                                <Button onClick={this.createProduct} variant="contained" color="primary" href="#contained-buttons">
                                    Adicionar
                                </Button>
                            </DivBotton>               
                        </DivAddProduct>
                    <DivLinha1></DivLinha1>
                    <DivLinha2></DivLinha2>
                    <DivProducts>
                        {product}
                        <DivIcons>
                        <a href='https://www.google.com'><img width='25px' height='25px' src='data:image/png;base64,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'/></a>
                        <a href="#top"><ArrowUpwardSharpIcon/></a>
                        </DivIcons>
                    </DivProducts>
                </DivAll>
                
                
        </div>)
          
    }
}


{/* <CardProductSeller name={product.name} discription={product.name} category={product.category} 
                    image={product.photos} payment={product.paymentMethod}/> */}