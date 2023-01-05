import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SearchResult from './components/SearchResult'
import { AppContext } from './utils/ContextApi'

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          {/* if you want to make any route default or you want every time the page load it shows that page by default add exact there */}
          <Route path='/' exact element={<Home />}/>
          <Route path='/:query/:startIndex' exact element={<SearchResult />}/>
        </Routes>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
