import './App.css'
import { Link } from 'react-router-dom';

function App() {


  return (
    <>
      <div className="container">
      <div className="loginSection">
            <div className="loginTop">
                <img src="/instagram-mp.svg" alt="Instagram main page" />
                <h3>Arkadaşlarınızın fotoğraflarını ve videolarını görmek için <br/>giriş yapın veya kaydolun.</h3>
            </div>
            <div className="loginBot">
                <button className='loginBtn'><Link to='register'>Giriş Yap</Link></button>
            </div>
        </div>
            <footer>
                <p>Hesabın yok mu?</p> <button className='registerBtn'><Link to='register'>Kaydol.</Link> </button>
            </footer>
      </div>
    </>
  )
}

export default App
