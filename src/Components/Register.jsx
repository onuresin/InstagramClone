import Instagram from '/images/instagram-mp.svg';
import { Link } from 'react-router-dom';
import Backto from '/images/back-shape.svg'

function Register() {
    return (
        <>
            <div className="container">
                <div className="registerInner">
                    <img src={Instagram}/>
                    <form className='registerForm'>
                        <input required type="text" placeholder='Kullanıcı Adı' name='username'/> <br />
                        <input required type="text" placeholder='İsim Soyisim' name='realname'/> <br />
                        <input required type="password" placeholder='Şifre' name='password'/> <br />
                        <input required type="password" placeholder='Şifre Tekrar' name='password_repeat'/> <br />
                        <input required type="mail" placeholder='E-Posta' name='email'/>
                    </form>
                    <button className='loginBtn goFeed'><Link to="/feed">Kaydı Tamamla</Link> </button>
                </div>
                <footer className='loginFooter'>
                    <Link className='backToMain' to="/"><img src={Backto} />Geri Dön</Link>
                </footer>
            </div>
        </>
    )
}
export default Register