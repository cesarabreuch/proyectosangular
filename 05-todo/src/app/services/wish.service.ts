import { Injectable } from '@angular/core';
import { List } from '../models/list.model';


@Injectable({
  providedIn: 'root'
})
export class WishService {

  lists: List[] = [];

  constructor() {

    this.loadStorage();
    console.log(this.lists);

  }

  createList(title: string) {

    const newList = new List(title);
    this.lists.push( newList );
    this.saveStorage();

    return newList.id;

  }

  deleteList(list: List) {
    this.lists = this.lists.filter( data => data.id !== list.id);
    this.saveStorage();
  }

  getList(id: string | number) {
    id = Number(id);
    return this.lists.find(list => list.id === id);
  }

  saveStorage() {
  localStorage.setItem( 'data', JSON.stringify(this.lists) );
  }

  loadStorage() {

    if ( localStorage.getItem('data') ) {

      this.lists = JSON.parse(localStorage.getItem('data') );
    } else {
      this.lists = [];
    }

  }

}
