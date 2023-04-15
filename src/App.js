import { Breadcrumb, Layout, Menu, theme } from 'antd';
import NavBar from './Components/NavBar';
import CardGallery from './Components/CardGallery';

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
        <CardGallery/>
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