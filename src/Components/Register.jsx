import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './Feed';
import { useState } from 'react';
import Backto from '/images/back-shape.svg'
import Instagram from '/images/instagram-mp.svg';


function Register() {
    const [errorCode, setErrorCode] = useState(0);
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault(); // form gönderdiğimizde sayfanın değişmesini engellemek için        

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        
        let { data, error } = await supabase.auth.signUp(formObj);
        
        if (error) {
            setErrorCode(error.status);
            return;
        }
        navigate ('/login');
        //redirect işlemi işlem tamamlandığında istenilen sayfaya yönlendirme
    }



    return (
        <>
            <div className="container">
                {errorCode === 400 && <p className='kayitliKullanici'>Bu kullanıcı daha önce kayıt oluşturmuş. Lütfen giriş yapmak için <Link to="/login">Giriş Yap</Link> butonuna tıklayın.</p>}
                <div className="registerInner">
                    <img src={Instagram}/>
                    <form className='registerForm' onSubmit={handleSubmit} autoComplete='off'>
                        {/* <input required type="text" placeholder='Kullanıcı Adı' name='username'/> <br />
                        <input required type="text" placeholder='İsim Soyisim' name='realname'/> <br /> */}
                        <input required type="mail" placeholder='E-Posta' name='email'/> <br />
                        <input required type="password" placeholder='Şifre' name='password'/> 
                        <button className='loginBtn'>Kaydı Tamamla</button>
                        {errorCode === 422 && <p className='pwError'>Şifreniz minimum 6 karakter olmalıdır.</p>}
                    </form>
                    
                </div>
                <footer className='loginFooter'>
                    <Link className='backToMain' to="/"><img src={Backto} />Geri Dön</Link>
                </footer>
            </div>
        </>
    )
}
export default Register