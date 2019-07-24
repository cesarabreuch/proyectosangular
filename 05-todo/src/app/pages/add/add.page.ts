import { Component, OnInit } from '@angular/core';
import { WishService } from '../../services/wish.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { WishItem } from 'src/app/models/list-item.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  nameItem =  '';

  constructor(private wishService: WishService,
              private route: ActivatedRoute) {

    const listId = this.route.snapshot.paramMap.get('listId');
    this.list = this.wishService.getList(listId);
    console.log(this.list);

   }

  ngOnInit() {}

  addItem() {
    if (this.nameItem.length === 0) {
      return;
    }
    const newItem = new WishItem(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = '';
    this.wishService.saveStorage();
  }

  changeCheck( item: WishItem ) {
    console.log(item);

    const pending = this.list.items
                    .filter( item => !item.complete)
                    .length;
    if (pending === 0) {
      this.list.finished = new Date();
      this.list.finish = true;
    } else {
      this.list.finished = null;
      this.list.finish = false;
    }
    console.log({pending});
    this.wishService.saveStorage();

  }

  delete( i: number ) {
    this.list.items.splice( i, 1 );
    this.wishService.saveStorage();
  }

}
