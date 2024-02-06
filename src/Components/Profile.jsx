import Backto from '/images/back-shape.svg'
import PP from '/images/profilePhotos.png'
import { Link, useLoaderData } from 'react-router-dom';

function Profile() {
    return(
        <>
            <div className="container">
                <div className="profileInner">
                    <div className="innerHeader">
                        <div className="top">
                            <Link to={'/feed'}><img src={Backto}/></Link>
                            <span>Profile Name</span>
                        </div>
                        <div className="profileInfos">
                            <img className='oval' src={PP}/>
                            <div className="pofolfol">
                                <span><h4>54</h4> <h5>Posts</h5></span>
                                <span><h4>31</h4> <h5>Followers</h5></span>
                                <span><h4>62</h4> <h5>Following</h5></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile