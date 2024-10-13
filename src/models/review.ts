export default class Review {

    static table = "review";

    id: string
    userName: string
    email: string
    content: string
    lastUpdate: number

    constructor(props: any = {}) {
        this.content = props.content ?? '';
        this.userName = props.userName ?? '';
        this.email = props.email ?? '';
        this.id = props.id ?? '';
        this.lastUpdate = props.lastUpdate ?? -1;
    }
}