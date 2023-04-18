import { useParams } from "react-router-dom";
import { Col, Row } from 'antd';
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from 'react';
import api from '../api/services/ProductService';


const ProductPage = () => {
    const [product, setProduct] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const {id} = useParams();
    const afterComplete = (resData) => {
        setProduct(resData);
        setIsLoaded(true);
    }

    useEffect(() => {
        api.getProduct(afterComplete, id);
    }, []);

    return (
        <Row gutter={16} justify={'center'}>
                {product ?
                    <Col span={8} xs={24} sm={12} md={8}>
                        <ProductDetail title={product.name}
                        description={product.description}
                        url={product.image_url}
                        alt={product.name}
                        id={product.id}
                        />
                    </Col>
                : null
                } 
        </Row>
    )
}

export default ProductPage;