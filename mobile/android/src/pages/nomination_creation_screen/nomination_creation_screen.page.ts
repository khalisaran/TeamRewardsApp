import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams,AlertController } from 'ionic-angular';
import { Nomination_Default_ActivityService } from '../../shared/shared';
@Component({
    templateUrl: 'nomination_creation_screen.page.html'
})
export class Nomination_Creation_ScreenPage{
    Nomination: any = {};

    constructor(private nav: NavController,public navParams: NavParams, private loadingController : LoadingController, public alertCtrl: AlertController, private nomination_default_activityservice: Nomination_Default_ActivityService) { }

    ionViewDidLoad() {
    }

    createNomination() {
        let loader = this.loadingController.create({
          content: 'Getting data...'
        });
        loader.present().then(() => {
          this.nomination_default_activityservice.createNomination(this.Nomination).subscribe(data => {
            console.log('data', data);
            loader.dismiss();
          },
          err => {
            console.log('error', err);
            loader.dismiss();
          });
        });
    }


}