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

function App() {

  return (<BrowserRouter>
    <Routes>
       <Route path="/*" element={<Layout/>} >
          <Route path="" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="industry" element={<Industry/>} />
          <Route path="solutions" element={<Solutions/>} />
          <Route path="esg" element={<ESG/>} />
          <Route path="innovation" element={<Innovation/>} />
          <Route path="industry/:name" element={<SubIndustry/>} />
          <Route path="solutions/:name" element={<SubSolution/>} />
       </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
