import './App.css';
import { Link } from 'react-router-dom';
import Instagram from '/images/instagram-mp.svg';

function App() {


  return (
    <>
      <div className="container">
         <div className="loginSection">
            <div className="loginTop">
                <img src={Instagram} alt="Instagram main page" />
                <h3>Arkadaşlarınızın fotoğraflarını ve videolarını görmek için <br/>giriş yapın veya kaydolun.</h3>
            </div>
            <div className="loginBot">
                <Link className='loginBtn' to='login'>Giriş Yap</Link>
            </div>
        </div>
            <footer>
                <p>Hesabın yok mu?</p> <button className='registerBtn'><Link to="register">Kaydol.</Link> </button>
            </footer>
      </div>
    </>
  )
}

export default App
