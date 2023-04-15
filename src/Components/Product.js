import { Card } from 'antd';

const { Meta } = Card;

const Product = ({title, description, url, alt, key}) => {
    return (
        <Card
            style={{margin:5}}
            hoverable
            cover={<img
                    alt={alt}
                    src={url}
                    />}
        >
            <Meta title={title} description={description}/>
        </Card>
    )
}

export default Product