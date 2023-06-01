import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import TopRated from './Pages/TopRated';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Registrasi from './Pages/Registrasi';
import './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const App = () => {

  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setIsLogin(true)
        setLoading(false)
        return
      }

      setIsLogin(false)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className='w-screen h-screen flex flex-col justify-center items-center text-xl'>Loading...</div>
    )
  }

  return (
    <>
      {isLogin ? (
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/top-rated' element={<TopRated />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Home />} />
            <Route path='/registrasi' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/top-rated' element={<Login />} />
            <Route path='/about' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registrasi' element={<Registrasi />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
