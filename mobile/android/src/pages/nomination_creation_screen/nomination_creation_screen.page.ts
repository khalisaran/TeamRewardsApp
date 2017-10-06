import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams,AlertController } from 'ionic-angular';
import { Nomination_Default_ActivityService } from '../../shared/shared';
import { Nominee_Default_ActivityService } from '../../shared/shared';
import { Leader_reviewer_Default_ActivityService } from '../../shared/shared';


@Component({
    templateUrl: 'nomination_creation_screen.page.html'
})
export class Nomination_Creation_ScreenPage{
    Nomination: any = {};

    array_Nominee: any[];

    array_Leader_reviewer: any[];



    constructor(private nav: NavController,public navParams: NavParams, private loadingController : LoadingController, public alertCtrl: AlertController, private nomination_default_activityservice: Nomination_Default_ActivityService,
      private nominee_default_activityservice: Nominee_Default_ActivityService, private leader_reviewer_default_activityservice: Leader_reviewer_Default_ActivityService
      ) { }

    ionViewDidLoad() {
    this.get_all_Nominee();
    this.get_all_Leader_reviewer();

    }

    createNomination() {
        let loader = this.loadingController.create({
          content: 'Getting data...'
        });
        loader.present().then(() => {
          this.Nomination.leader_reviewers=this.Nomination.leader_reviewers.toString();
          //this.Nomination.is_team=true;
          this.Nomination.nominees=this.Nomination.nominees.toString();
          //
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

    get_all_Leader_reviewer() {
        let loader = this.loadingController.create({
          content: 'Getting data...'
        });
        loader.present().then(() => {
          this.leader_reviewer_default_activityservice.get_all_Leader_reviewer().subscribe(data => {
            console.log('data', data);
            this.array_Leader_reviewer = data;
            loader.dismiss();
          },
          err => {
            console.log('error', err);
            loader.dismiss();
          });
        });
    }

}