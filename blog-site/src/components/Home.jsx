import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import '../App.css'
const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;