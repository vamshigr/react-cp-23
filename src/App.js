import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './components/NotFound'

import './App.css'
import Layout from './components/Layout'
import BlogList from './components/BlogList'
import BlogItem from './components/BlogItem'

const App = () => (
  <div>
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs/:id" element={<BlogItem />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </div>
)

export default App
