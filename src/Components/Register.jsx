import Instagram from '/images/instagram-mp.svg';
import { Link } from 'react-router-dom';
import Backto from '/images/back-shape.svg'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mswfpsgvrdrfhfzpcnqo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zd2Zwc2d2cmRyZmhmenBjbnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3MTMyOTAsImV4cCI6MjAyMjI4OTI5MH0.FlDTZ4sgzqUgH3RiAyDmrFBcgtcrYsTEtVaiytuTjEI'
const supabase = createClient(supabaseUrl, supabaseKey );

function Register() {
    async function handleSubmit(e) {
        e.preventDefault(); // form gönderdiğimizde sayfanın değişmesini engellemek için        

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        
        let { data, error } = await supabase.auth.signUp(formObj);
        console.log(data);
        console.log(error);
    }



    return (
        <>
            <div className="container">
                <div className="registerInner">
                    <img src={Instagram}/>
                    <form className='registerForm' onSubmit={handleSubmit} autoComplete='off'>
                        {/* <input required type="text" placeholder='Kullanıcı Adı' name='username'/> <br />
                        <input required type="text" placeholder='İsim Soyisim' name='realname'/> <br /> */}
                        <input required type="mail" placeholder='E-Posta' name='email'/> <br />
                        <input required type="password" placeholder='Şifre' name='password'/> 
                        <button className='loginBtn'>Kaydı Tamamla</button>
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