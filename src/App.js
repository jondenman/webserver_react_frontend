import { Breadcrumb, Layout, Menu, theme } from 'antd';
import NavBar from './Components/NavBar';

const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <NavBar/>
      </Header>
      
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Created by Jon Denman
      </Footer>
    </Layout>
  );
};
export default App;