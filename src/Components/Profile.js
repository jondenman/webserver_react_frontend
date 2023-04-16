import { Layout, Button, Space } from 'antd';
import CardGallery from './CardGallery';

const { Content } = Layout;

export default () =>
    <>
        <Space block style={{justifyContent: 'center', margin: 5}}>
            <Button type="primary">Add Product</Button>
            <br />
        </Space>
        <Space block style={{justifyContent: 'center', margin: 5}}>
            <CardGallery/>
        </Space>
    </>