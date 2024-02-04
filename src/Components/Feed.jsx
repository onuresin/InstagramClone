import Instagram from '/images/instagram-mp.svg';
import Likes from '/images/likes.svg'
import Messages from '/images/messages.svg'
import Nonprofile from '/images/natural-profile.svg'
import FeedHome from '/images/home-active.svg'
import Add from '/images/add.svg'
import UserPage from '/images/user-profile.svg'
import { Link, useLoaderData } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient('https://mswfpsgvrdrfhfzpcnqo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zd2Zwc2d2cmRyZmhmenBjbnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3MTMyOTAsImV4cCI6MjAyMjI4OTI5MH0.FlDTZ4sgzqUgH3RiAyDmrFBcgtcrYsTEtVaiytuTjEI' );

export async function loader() {
    
    const { data, error } = await supabase.auth.getSession()
    return data ;
}

export default function Feed() {
    const user = useLoaderData();

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
                    <button><Link to='/feed'><img src={FeedHome} alt="Feed" /></Link> </button>
                    <button><Link to='/post'><img src={Add}/></Link></button>
                    <button><Link to='/Profile'><img src={UserPage} alt="Feed" /></Link> </button>
                </div>
            </div>
        </>
    )
};