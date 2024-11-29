import ImageData, { ImageDataType } from "@/models/imageData";
import { Breakpoint } from "@mui/material";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { firebaseStorage } from "./config";

const getAudioUrl = async () => {
    const pathReference = ref(firebaseStorage, 'audios/audio.m4a');
    const data = await getDownloadURL(pathReference);
    return data;
}

const getAllAlbums = async () => {
    const results: { [key: string]: ImageData[] } = {};
    const pathReference = ref(firebaseStorage, 'images');
    const data = await listAll(pathReference);
    for(const item of data.prefixes) {
        const list = await listAll(item);
        for(const imageRef of list.items) {
            const imageUrl = await getDownloadURL(imageRef);
            const image = await getImageData(imageUrl, imageRef.name, item.name as ImageDataType);
            if(!results[image.name]) {
                results[image.name] = [];
            }
            results[image.name].push(image);
        }
    }
    return results;
}

const getImageData = (url: string, name: string, type: Breakpoint): Promise<ImageData> => {
    return new Promise<ImageData>((resolve) => {
        const img = new Image();
        img.onload = function() {
            resolve({ 
                width: img.width,
                height: img.height,
                name,
                url,
                type
            });
        }
        img.src = url;
    });
}

export const FireStorageRepo = {
    getAudioUrl,
    getAllAlbums
}