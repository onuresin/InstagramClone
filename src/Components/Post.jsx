import { useState } from "react"
import { Link } from 'react-router-dom';
import Add from '/images/add.svg'
import UserPage from '/images/user-profile.svg'
import FeedHome from '/images/home-active.svg'
import ImageUpload from "./ImageUpload";
import Instagram from '/images/instagram-mp.svg';
function Post() {

    return(
        <>
            <div className="container">
                <div className="topNav">
                        <img src={Instagram}/>
                </div>
                <div className="innerPost">
                    <ImageUpload />
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



































