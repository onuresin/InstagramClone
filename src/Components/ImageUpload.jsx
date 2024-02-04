import { useRef } from "react";
import { supabase } from "./Feed";

export default function ImageUpload() {
    const imagePreview = useRef(null);

    function handleChange(e) {
        const reader = new FileReader();
        reader.addEventListener('load', function(ev) {
            imagePreview.current.src = ev.target.result;
        });
        reader.readAsDataUrl(e.tarhet.files[0]);
    } // yüklenen image dosyasının seçildikten sonra ekrana basılmasını sağlar

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);

        const { data, error } = await supabase.storage
            .from('photos')
            .upload(formObj.image.name, formObj.image)
        
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input required type="file" onChange={handleChange} accept="image/*" name="image" />
                <button>Yükle</button>
            </form>

            <h5>Görsel Ön İzleme</h5>
            <img src="https://placehold.co/380x380" ref={imagePreview} />
            

        </>
    )
}