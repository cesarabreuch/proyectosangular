import { WishItem } from './list-item.model';


export class List {

    id: number;
    title: string;
    created: Date;
    finished: Date;
    finish: boolean;
    items: WishItem[];

    constructor( title: string ) {
        this.title = title;
        this.created = new Date();
        this.finish = false;
        this.items = [];
        this.id = new Date().getTime(); // only for this example
    }
}
