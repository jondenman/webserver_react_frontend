import { Breadcrumb, Layout, Menu, theme } from 'antd';
import NavBar from './Components/NavBar';
import CardGallery from './Components/CardGallery';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';
import ProductPage from './Components/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const queryClient = new QueryClient()
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
        <Header>
          <NavBar/>
        </Header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
    
  );
};
export default App;