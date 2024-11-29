import ImageData from '@/models/imageData';
import images from '../../config/images/images.json';

const getAllAlbums = () => {
    const data = JSON.parse(JSON.stringify(images));
    const map: { [key: string]: ImageData[] } = {};
    for(const name of Object.keys(data)) {
        map[name] = data[name].map((a: any) => new ImageData(a));
    }
    return map;
}

export const JSONData = {
    getAllAlbums
}