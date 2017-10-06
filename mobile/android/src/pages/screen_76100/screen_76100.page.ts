import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams,AlertController } from 'ionic-angular';
import { Nominee_Default_ActivityService } from '../../shared/shared';
@Component({
    templateUrl: 'screen_76100.page.html'
})
export class Screen_76100Page{
    array_Nominee: any[];

    constructor(private nav: NavController,public navParams: NavParams, private loadingController : LoadingController, public alertCtrl: AlertController, private nominee_default_activityservice: Nominee_Default_ActivityService) { }

    ionViewDidLoad() {
    }

    get_all_Nominee() {
        let loader = this.loadingController.create({
          content: 'Getting data...'
        });
        loader.present().then(() => {
          this.nominee_default_activityservice.get_all_Nominee().subscribe(data => {
            console.log('data', data);
            this.array_Nominee = data;
            loader.dismiss();
          },
          err => {
            console.log('error', err);
            loader.dismiss();
          });
        });
    }


}