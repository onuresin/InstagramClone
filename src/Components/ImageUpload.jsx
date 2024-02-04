import { useRef } from "react";
import { supabase } from "./Feed";

export default function ImageUpload() {
    const imagePreview = useRef(null);

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
            .upload(formObj.image.name, formObj.image, formObj.camera.name, formObj.camera,formObj.selfie.name, formObj.selfie)

            window.location.reload()
        
    }
    return(
        <>
            <form className="uploadForm" onSubmit={handleSubmit}>
                <input required type="file" onChange={handleChange} accept="image/*" name="image" /> <br />
                <label for="photo">Arka Kamera</label> <br />
                <input type="file" capture="environment" onChange={handlePhotoChange} name="camera" /> <br />
                <label for="selfie">Selfie</label> <br />
                <input type="file" capture='user' onChange={handleSelfieChange} name="selfie" /> <br /> <br />
                <button className='loginBtn'>Yükle</button>
            </form>

            <img className="uploadedImage" src="https://placehold.co/380x380" ref={imagePreview} />
            

        </>
    )
}