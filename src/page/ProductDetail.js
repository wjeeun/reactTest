import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/wjeeun/reactTest/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
    setSize(product?.size);
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>

        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice}</div>

          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            {size?.map((item) => (
              <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
            ))}
          </DropdownButton>
          <Button variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
