import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import BenefitsPage from './pages/BenefitsPage.jsx'
import FaqsPage from './pages/FaqsPage.jsx'

const App = () => {
  return(
    <div>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/About' element={<AboutPage />}/>
            <Route exact path='/Services' element={<ServicesPage />}/>
            <Route exact path='/Projects' element={<ProjectsPage />}/>
            <Route exact path='/Benefits' element={<BenefitsPage />}/>
            <Route exact path='/Faqs' element={<FaqsPage />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
