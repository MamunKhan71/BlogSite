import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import '../App.css'
const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='w-full h-dvh border border-dashed rounded-xl mt-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;