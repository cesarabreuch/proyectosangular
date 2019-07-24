import { Component } from '@angular/core';
import { WishService } from 'src/app/services/wish.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lists: any[] = [];

  constructor( public wishService: WishService,
               private router: Router,
               private alertControl: AlertController ) {

     this.lists = wishService.lists;

  }

  async addList() {


    const alert = await this.alertControl.create({
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Add list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'Add',
          handler: (data: any) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            }
            const listId = this.wishService.createList(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
          }
        }
      ]
    });
    alert.present();
  }
}
