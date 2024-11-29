import { getDownloadURL, list, listAll, ref } from "firebase/storage";
import { firebaseStorage } from "./config"

const getAudioUrl = async () => {
    const pathReference = ref(firebaseStorage, 'audios/audio.m4a');
    const data = await getDownloadURL(pathReference);
    return data;
}

const getAllAlbums = async (type: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
    // const list: { w: number, h: number, url: string }[] = [];
    const pathReference = ref(firebaseStorage, 'images');
    const data = await listAll(pathReference);

    for(const item of data.prefixes) {
        const list = await listAll(item);
        console.log(item.name, " => ", list)
    }

    // const results = await Promise.all(data.items.map(async (item) => await getDownloadURL(item)));
    // console.log("results", results)
    // for(const imageUrl of results) {
    //     const item: any = await getImageSize(imageUrl);
    //     item.url = imageUrl;
    //     list.push(item);
    // }
    // return list;
}

const getImageSize = (url: string) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = function() {
            resolve({ w: img.width, h: img.height })
        }
        img.src = url;
    });
}

export const FireStorageRepo = {
    getAudioUrl,
    getAllAlbums
}