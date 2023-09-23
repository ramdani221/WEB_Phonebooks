import { useState } from "react"
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateAvatar } from "../actions/contacts";
// import { Link } from "react-router-dom"

export default function UpdateAvatar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { state } = useLocation()
    const [selectedImage, setSelectedImage] = useState();

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage();
    };

    const submit = () => {
        const formData = new FormData()
        console.log('gambar', selectedImage)
        formData.append('avatar', selectedImage)
        dispatch(updateAvatar(state.id, formData))
        navigate('/')
    }

    return (
        <>
            <div>
                <form onSubmit={submit}>
                    <input accept="image/*" type="file" onChange={imageChange} />
                    <button type="submit">save</button>
                </form>

                {selectedImage && (
                    <div>
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Thumb"
                        />
                        <button onClick={removeSelectedImage}>
                            Remove This Image
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}