export default function Register() {
    return (
        <>
            <div className="container">
                <div className="loginSection">
                    <img src={Instagram}/>
                    <form className='loginForm'>
                        <input required type="text" placeholder='Kullanıcı adı' name="username"/> <br />
                        <input required type="password" placeholder='Şifre' name="password" /> <br />
                        <button className='loginBtn goFeed'><Link to='#'>Giriş Yap</Link></button>
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
                                <p>Hesabın yok mu?</p> <button className='registerBtn'><Link to='register'>Kaydol.</Link> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    
                </footer>
            </div>
        </>
    )
}