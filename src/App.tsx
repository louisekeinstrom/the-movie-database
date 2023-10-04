import { Container } from 'react-bootstrap'
import '../src/assets/scss/App.scss'
import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import InTheatre from './pages/InTheatre'
import TopRated from './pages/TopRated'
import Trending from './pages/Trending'
import NotFound from './pages/NotFound'
import GenrePage from './pages/Genres'
import Movie from './pages/Movie'

function App() {
  return (
    <>
    <Navigation/>
      <Container style={{width: "100%"}} className='container d-flex flex-column'>
          <Routes>
          <Route path='/' element={<HomePage />}/>
            <Route path='/in-theatre/' element={<InTheatre />}/>
              <Route path=':id' element={<InTheatre />}/>
            <Route path='/top-rated' element={<TopRated />}/>
            <Route path='/trending' element={<Trending />}/>
            <Route path='/genres' element={<GenrePage />}/>
            <Route path='/movie/:id' element={<Movie />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
      </Container>
    </>
  )
}

export default App
