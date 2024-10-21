import { getDownloadURL, ref } from "firebase/storage";
import { firebaseStorage } from "./config"

const getAudioUrl = async () => {
    const pathReference = ref(firebaseStorage, 'audios/audio.m4a');
    const data = await getDownloadURL(pathReference);
    return data;
}

export const FireStorageRepo = {
    getAudioUrl
}