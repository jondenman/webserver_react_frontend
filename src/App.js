import { Breadcrumb, Layout, Menu, theme } from 'antd';
import NavBar from './Components/NavBar';
import CardGallery from './Components/CardGallery';
import { QueryClient, QueryClientProvider } from 'react-query';

const { Header, Content, Footer } = Layout;
const queryClient = new QueryClient()
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
    
  );
};
export default App;