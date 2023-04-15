import { Layout} from 'antd';

const { Content } = Layout;

export default () =>
    <>
        <Content 
            style={{
                padding: '0 50px',
                textAlign: 'center'
            }}
        >
            <h1>
                Welcome to my ecommerce template site 
            </h1>
            <h3>
                It's built using React, Django, and PostgreSQL
            </h3>
        </Content>
    </>