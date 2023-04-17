import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import {FileTextOutlined} from '@ant-design/icons';
const { Meta } = Card;

const Product = ({title, description, url, alt, id}) => {
    return (
        <Card
            style={{margin:10}}
            hoverable
            cover={<img
                    alt={alt}
                    src={url}
                    />}
        >
            <Meta title={title} description={description}/>
            <Link to={`/customers/${id}`}>
                <FileTextOutlined style={{float: 'right'}} />
            </Link>
            
            
        </Card>
    )
}

export default Product