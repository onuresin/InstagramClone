import Instagram from '/images/instagram-mp.svg';
import { Link } from 'react-router-dom';
import Facebook from '/images/facebook-Icon.svg';
import Backto from '/images/back-shape.svg'
function Login() {
    return (
        <>
            <div className="container">
                <div className="loginSection">
                    <img src={Instagram}/>
                    <form className='loginForm'>
                        <input required type="mail" placeholder='E-Posta' name='email'/> <br />
                        <input required type="password" placeholder='Şifre' name="password" /> <br />
                        <button className='loginBtn goFeed'><Link to='feed'>Giriş Yap</Link></button>
                    </form>
                    <div className="loginSignUp">
                        <a href="#"><img src={Facebook}/> Login with Facebook</a>
                        <div className="signUpWay">
                            <div className="signUpTop">
                                <span></span>
                                <h4>Yada</h4>
                                <span></span>
                            </div>
                            <div className="signUpBot">
                                <p>Hesabın yok mu?</p> <button className='registerBtn'><Link to="/register">Kaydol.</Link> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='loginFooter'>
                    <Link className='backToMain' to="/"><img src={Backto} />Geri Dön</Link>
                </footer>
            </div>
        </>
    )
}

export default Login