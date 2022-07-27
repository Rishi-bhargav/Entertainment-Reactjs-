import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'

function App() {
  return (
    <>
      <Header />
      <div className='App'>
        <Container>
          <Routes>
            <Route path='/' element={<Trending />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default App
