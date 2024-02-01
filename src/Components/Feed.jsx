import Instagram from '/images/instagram-mp.svg';
import Likes from '/images/likes.svg'
import Messages from '/images/messages.svg'
import Nonprofile from '/images/natural-profile.svg'

export default function Feed() {
    return(
        <>
            <div className="container">
                <div className="feedHeader">
                    <div className="topNav">
                        <img src={Instagram}/>
                        <div className="topNavSp">
                            <img src={Likes}/>
                            <img src={Messages}/>
                        </div>
                    </div>
                    <div className="storySection">
                        <img src={Nonprofile} />
                    </div>
                </div>
                <div className="feedContainer">

                </div>
                <div className="bottomNav">
                    
                </div>
            </div>
        </>
    )
};