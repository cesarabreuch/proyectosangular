import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WishService } from 'src/app/services/wish.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() done = true;
  @ViewChild(IonList) list: IonList;  // busca el elemento ionlist en el componente

  constructor(public wishService: WishService,
              private router: Router,
              private alertControl: AlertController) {

   }

ngOnInit() {}

selectedList(list: List) {

  if (this.done) {
    this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
  } else {
    this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
  }
}

deleteList(list: List) {
  this.wishService.deleteList( list );
}



async editList( list: List) {


  const alert = await this.alertControl.create({
    header: 'Edit List',
    inputs: [
      {
        name: 'title',
        type: 'text',
        value: list.title,
        placeholder: 'Add list'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancelar');
          this.list.closeSlidingItems();
        }
      },
      {
        text: 'Edit',
        handler: (data) => {
          console.log(data);
          if (data.title.length === 0) {
            return;
          }
          list.title = data.title;
          this.wishService.saveStorage();
        }
      }
    ]
  });
  alert.present();
  this.list.closeSlidingItems();
}

}
