export type ImageDataType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default class ImageData {
    width: number
    height: number
    name: string
    type: ImageDataType
    url: string

    constructor(props: any = {}) {
        this.width = props.width;
        this.height = props.height;
        this.name = props.name;
        this.type = props.type;
        this.url = props.url;
    }
}