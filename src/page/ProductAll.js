import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProductAll = ({authenticate}) => {
    const [query, setQuery]=useSearchParams();


    const [productList, setProductList]=useState([]);

    const getProducts = async()=>{
        let searchQuery=query.get('q') || '';
        let url=`https://my-json-server.typicode.com/wjeeun/reactTest/products?q=${encodeURIComponent(searchQuery)}`;
        let response=await fetch(url);
        let data=await response.json();
        setProductList(data);
    }

    useEffect(()=>{
        getProducts();
    },[query]);



    return (
    <div>
        <Container>
            <Row>
                {productList.map((item)=>(<Col lg={3}><ProductCard
                item={item}
                authenticate={authenticate} 
                /></Col>))}
            </Row>            
        </Container>       
    </div>
  )
}

export default ProductAll