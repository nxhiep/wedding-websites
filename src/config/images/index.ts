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

export const ImagesConfig = {
    bride: 'https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2Fbride.jpg?alt=media&token=57e930e8-0e7b-4b6c-9f4b-6fb5b6254e2d',
    groom: 'https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2Fgroom.jpg?alt=media&token=92c1932c-3fba-41b1-95a3-a1c9469c9678',
    slides: [
        'https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2Fphoto3.jpg?alt=media&token=97b89253-53af-4837-b94c-e88aefe6ab44',
        'https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2Fphoto2.jpg?alt=media&token=38a53884-0ccf-4cf6-9891-d6011918a271',
        'https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2Fphoto4.jpg?alt=media&token=a41f3861-ffcc-4f14-b41a-2857cff6e955',
        'https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2Fphoto5.jpg?alt=media&token=b9e5b14d-1b39-4f05-8402-f79692571e1b',
        'https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2Fphoto1.jpg?alt=media&token=185e6520-b62c-4cd7-a00e-6195cf421959',
    ],
    events: [
        'https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2FDSC04265.jpg?alt=media&token=1049f11a-bc69-47d0-88ee-1fce7d4bd8bb',
        'https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2FDSC05296.jpg?alt=media&token=203d83b6-6d74-4214-9774-93f4ee47b9a5'
    ],
    qrsBank: [
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2Fqr-hiep.jpg?alt=media&token=54214b0a-1368-4c3d-91f8-33ae6cb0df5c",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-835af.appspot.com/o/optimize-images%2Fqr-ngocanh.jpg?alt=media&token=58e68623-53ef-42e6-9c17-4d44902b7e50"
    ],
    getAllAlbums
}