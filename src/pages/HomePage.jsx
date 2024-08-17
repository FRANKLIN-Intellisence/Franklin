import Home from '../components/molecules/Home.jsx'
import Nav from '../components/molecules/Nav.jsx'
import Footer from '../components/molecules/Footer.jsx'
const HomePage = () => {
    return (
        <div className='flex flex-col' >
            <Nav />
            <Home />
            <Footer />
        </div>
    )
}


export default HomePage;