import { Fragment, useEffect, useState } from 'react';
import { supabase } from './Feed';
import { useLoaderData } from 'react-router-dom';

export async function loader() {

    const { data: photoscomments } = await supabase.from('photoscomments').select('id, photoscomments, created_at, profiles(name)');

    return data.session?.user?? data.session;
}
function GlobalFeed() {
    const [user, setUser] = useState(useLoaderData());
    const [photoscomments, setPhotosComments] = useState([]);
    useEffect(()=> {
        async function fetchData() {
            const userData = await loader();
            setPhotosComments(commentsData);
        }
        fetchData();
    }, [])
    return(
        <>
            <div className="container">
                <div className="globalInner">
                    <p>Kullanıcı: {user?.name}</p>
                    {photoscomments.map(x =>
                        <Fragment key={x.id}>
                            <h5>{x.photoscomments}</h5>
                            <h6>{x.profiles}</h6>
                        </Fragment>)}
                </div>
            </div>
        </>
    )
}
export default GlobalFeed