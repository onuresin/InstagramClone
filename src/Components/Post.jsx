import { useState } from "react"
import { Link } from 'react-router-dom';
import Add from '/images/add.svg'
import UserPage from '/images/user-profile.svg'
import FeedHome from '/images/home-active.svg'
function Post() {
    const [photo, setPhoto] = useState(true);
    const [selfie, setSelfie] = useState(false);
    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    }
    const handleSelfieChange = (e) => {
        setSelfie(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <>
            <div className="container">
                <div className="innerPost">
                    <form onSubmit={handleSubmit}>
                        <label for="photo">Arka Kamera</label> <br />
                        <input type="file" capture="environment" onChange={handlePhotoChange} /> <br />
                        <label for="selfie">Selfie</label> <br />
                        <input type="file" capture='user' onChange={handleSelfieChange} /> <br />
                    </form>
                </div>
                <div className="bottomNav">
                    <button><Link to='/feed'><img src={FeedHome} alt="Feed" /></Link> </button>
                    <button><Link to='/post'><img src={Add}/></Link></button>
                    <button><Link to='/Profile'><img src={UserPage} alt="Feed" /></Link> </button>
                </div>
            </div>
        </>
    )
}

export default Post



































