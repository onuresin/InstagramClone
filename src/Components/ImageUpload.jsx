import { useRef, useState } from "react";
import { supabase } from "./Feed";

export default function ImageUpload() {
    const imagePreview = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [selfi, setSelfie] = useState(null)

    function handleChange(e) {
        const reader = new FileReader();
        reader.addEventListener('load', function(ev) {
            imagePreview.current.src = ev.target.result;
        });
        reader.readAsDataURL(e.target.files[0]);
    
    } // yüklenen image dosyasının seçildikten sonra ekrana basılmasını sağlar


    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener('load', function(ev) {
            imagePreview.current.src = ev.target.result;
        });
        reader.readAsDataURL(e.target.files[0]);
    }
    const handleSelfieChange = (e) => {
        setSelfie(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener('load', function(ev) {
            imagePreview.current.src = ev.target.result;
        });
        reader.readAsDataURL(e.target.files[0]);
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);

        const { data, error } = await supabase.storage
            .from('photos')
            .upload(formObj.image.name, formObj.image)
            window.location.reload()
    }
    return(
        <>
            <form className="uploadForm" onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} accept="image/*" name="image" /> <br />
                <label htmlFor="photo">Arka Kamera</label> <br />
                <input type="file" capture="environment" onChange={handlePhotoChange} name="image" accept="image/*" /> <br />
                <label htmlFor="selfie">Selfie</label> <br />
                <input type="file" capture='user' onChange={handleSelfieChange} name="image" accept="image/*"/> <br /> <br />
                <button className='loginBtn'>Yükle</button>
            </form>

            <img className="uploadedImage" src="https://placehold.co/380x380" ref={imagePreview} />
            

        </>
    )
}