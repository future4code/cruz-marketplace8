import React from 'react';
import axios from 'axios';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import {baseUrl, categories, paymentMethod, installments} from '../parameters'
import CardProductSeller from './CardProductSeller'
import HeaderSeller from './HeaderSeller'
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import HeadsetIcon from '@material-ui/icons/Headset';
import IconButton from '@material-ui/core/IconButton';
import Footer from './Footer'

const DivAddProduct = styled.div`
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
    height: 300px;
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
                "category": this.state.category,
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
                        </DivAddProduct>-
                    <DivLinha1></DivLinha1>
                    <DivLinha2></DivLinha2>
                    <DivProducts>
                        {product}
                       
                    </DivProducts>
                </DivAll>
                <DivIcons>
                        <a href = "https://forms.gle/2VCwNryJFzLYRnW39">
                            <IconButton  
                                color="primary"
                                fontSize="large" 
                                >
                                <HeadsetIcon/>
                            </IconButton>
                        </a>
                        
                        <IconButton  
                            color="primary" 
                            fontSize="large"
                            href="#top"
                            >
                            <ArrowUpwardSharpIcon/>
                        </IconButton>
                </DivIcons>
                
                <Footer />
                
        </div>)
          
    }
}

