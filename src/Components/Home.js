import { Breadcrumb, Layout, Menu, theme } from 'antd';
import CardGallery from './CardGallery';

const { Content, Footer } = Layout;
export default () =>
    <>
        <Content
            style={{
                padding: '0 50px',
            }}
            >
            <CardGallery/>
        </Content>
        <Footer
        style={{
            textAlign: 'center',
        }}
        >
        Created by Jon Denman
        </Footer>
    </>