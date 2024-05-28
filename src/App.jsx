import './style/main.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppHeader } from './cmps/AppHeader'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { AppFooter } from './cmps/AppFooter'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <AppHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <AppFooter />
      </Router>
    </Provider>
  )

}
export default App
