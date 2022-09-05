import { Layout as LayoutAnt } from 'antd';
import About from 'pages/About';
import Community from 'pages/Community';
import GovernanceAgenda from 'pages/GovernanceAgenda';
import GovernaceCouncil from 'pages/GovernanceCouncil';
import Home from 'pages/Home';
import MyPage from 'pages/MyPage';
import { useRoutes } from 'react-router-dom';
import FooterComponent from '../Footer';
import NavBar from '../Navbar';
const { Header, Content, Footer } = LayoutAnt;

const Layout = () => {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/community', element: <Community /> },
    { path: '/governance-agenda', element: <GovernanceAgenda /> },
    { path: '/governance-council', element: <GovernaceCouncil /> },
    { path: '/my-page', element: <MyPage /> }
  ]);
  return (
    <LayoutAnt>
      <Header>
        <NavBar />
      </Header>
      <LayoutAnt>
        <Content>{element}</Content>
      </LayoutAnt>
      <Footer>
        <FooterComponent />
      </Footer>
    </LayoutAnt>
  );
};

export default Layout;
