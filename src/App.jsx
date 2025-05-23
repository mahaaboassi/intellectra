import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Layout from './pages/layout'
import About from './pages/about/about'
import Industry from './pages/industry/industry'
import Solutions from './pages/solutions/solutions'
import SubIndustry from './pages/subIndustry/subIndustry'
import SubSolution from './pages/subSolution/subSolution'
import ESG from './pages/esg/esg'
import Innovation from './pages/innovation/innovation'
import Contact from './pages/contact/contact'
import FAQs from './pages/FAQs/faqs'
import PrivacyPolicy from './pages/privacyPolicy/privacy'
import Cookies from './pages/cookies/cookies'
import TermsAndConditions from './pages/terms&conditions/terms&conditions'
import Pulse from './pages/pulse/pulse'
import LayoutTemplate from './pages/layout/page'
import PulseDetails from './pages/pulse/details'

function App() {

  return (<BrowserRouter>
    <Routes>
       <Route path="/*" element={<Layout/>} >
          <Route path="" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="layout" element={<LayoutTemplate/>} />
          <Route path="industries" element={<Industry/>} />
          <Route path="solutions" element={<Solutions/>} />
          <Route path="esg" element={<ESG/>} />
          <Route path="innovation" element={<Innovation/>} />
          <Route path="industries/:name" element={<SubIndustry/>} />
          <Route path="solutions/:name" element={<SubSolution/>} />
          <Route path="pulse/:title" element={<PulseDetails/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="FAQs" element={<FAQs/>} />
          <Route path="privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="cookies-center" element={<Cookies/>} />
          <Route path="pulse" element={<Pulse/>} />
          <Route path="terms-&-conditions" element={<TermsAndConditions/>} />
       </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
