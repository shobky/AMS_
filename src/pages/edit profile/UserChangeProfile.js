import React, { useState } from 'react'
import './userChangeProfile.css'
import { IoClose } from 'react-icons/io5'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { auth, storage } from '../../firebase/Config'
import { useNavigate } from 'react-router'
import PhotoCropper from '../../components/photoCropper/PhotoCropper'
import { updateProfile } from 'firebase/auth'
import { ImSpinner } from 'react-icons/im'
import { IoPerson } from 'react-icons/io5'
import { useAuth } from '../../contexts/AuthContext'


const UserChangeProfile = () => {
    const { currentUser } = useAuth()

    const [file, setFile] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null)
    const [imageSrc, setImageSrc] = React.useState(null)
    const [isCropping, setIsCropping] = useState(false)

    const [username, setUsername] = useState(currentUser?.displayName)

    const [err, setErr] = useState('')
    const [uploading, setUploading] = useState(false)


    const navigate = useNavigate()

    const onFileChange = async (e) => {
        setCroppedImage(null)
        if (e.target.files && e.target.files.length > 0) {
            setIsCropping(true)
            const file = e.target.files[0]
            setFile(file)
            let imageDataUrl = await readFile(file)
            setImageSrc(imageDataUrl)
        }
    }

    function readFile(file) {
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.addEventListener('load', () => resolve(reader.result), false)
            reader.readAsDataURL(file)
        })
    }

    const croppedImageSetter = (img) => {
        setCroppedImage(img)
    }
    const croppingStatusSetter = () => {
        setIsCropping(false)
    }
    const handleUpload = async () => {
        setErr('')
        if (file === null && username === currentUser?.displayName) {
            setErr('Please edit your information first.')
            return;
        }
        setUploading(true)

        let response = await fetch(croppedImage).catch(() => {
            setUploading(false)
        });
        let data = await response.blob();
        const imgFile = (new File([data], file.name, { type: 'image/jpeg' }));

        const storageRef = ref(storage, `users/${imgFile.name}`);
        uploadBytes(storageRef, imgFile).then(async (snapshot) => {
            const url = file ? await getDownloadURL(ref(storage, `users/${imgFile.name ?? ""}`)) : null
            updateProfile(auth.currentUser, {
                displayName: username,
                photoURL: url ?? currentUser?.photoURL
            })
        }).then(() => {
            navigate('/')
            setUploading(false)
        }).catch((err) => {
            setUploading(false)
            setErr(`Sorry, Couldn't upload the picture to our servers. `)
        })

    };

    return (
        <div className='edit_profile'>
            {
                uploading && <div className='edit-profile_loading-screen-filter'></div>
            }
            {
                err && <p className='edit-profile_error-text'> {err}</p>
            }
            {
                isCropping ?
                    <PhotoCropper
                        imageSrc={imageSrc}
                        croppedImage={croppedImage}
                        croppedImageSetter={croppedImageSetter}
                        croppingStatusSetter={croppingStatusSetter} /> :
                    <>
                        <header className='edit-profile_header'>
                            <button onClick={() => navigate('/')} className='edit-profile_close-ico edit-profile_btn'><IoClose /></button>
                            <p className='edit-profile_head'>Edit profile</p>
                            <button onClick={handleUpload} className='edit-profile_save-btn edit-profile_btn'> {uploading ? <ImSpinner className='edit-profile_loading-icon' /> : 'Save'}</button>
                        </header>
                        <div className='edit-profile_info'>
                            <div className='edit-profile_info_img-div'>
                                {
                                    !croppedImage && !currentUser?.photoURL ?
                                        <IoPerson className='edit-profile_noxprofile-ico' /> :
                                        <img src={croppedImage ? croppedImage : currentUser?.photoURL ?? ""} alt="your_photo" className='edit-profile_user-photo' />
                                }
                                <button className='edit-profile_info-btn'>{currentUser?.photoURL? 'Change photo' : 'Add photo'}</button>

                                <input className='edit-image-input' onChange={(e) => onFileChange(e)} type="file" accept='image/*' id='profilePhoto' />

                            </div>
                            <input onChange={e => setUsername(e.target.value)} type='text' value={username ?? currentUser?.displayName ?? 'YOUR NAME'} className='edit-profile_username' />
                        </div>

                        <p className='edit-profile_footer'> This could be your name or a nickname. </p>
                    </>
            }

        </div>
    )
}

export default UserChangeProfile
