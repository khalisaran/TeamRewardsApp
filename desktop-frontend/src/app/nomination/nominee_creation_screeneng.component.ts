import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NominationService } from './nomination.service';
import { NomineeService } from '../nominee/nominee.service';
import { INominee } from '../nominee/nominee';
import { INomination } from './nomination';

@Component({
    moduleId: module.id,
    templateUrl: 'nominee_creation_screeneng.component.html'
})
export class Nominee_Creation_ScreenengComponent implements OnInit {
  private array_Nominee: INominee[];

  private nomination: INomination = {
  	id: 0,
  	nominator: '',	nominator_los: '',	team_name: '',	project_name: '',	is_team: false,	is_individual: '',	team_desc: '',	team_notes: '',	prime_adjst: '',	sec_adjst: '',	award_total: '',	award_category: '',	behaviors: '',	is_current_audit_client: '',	one_firm_metric: '',	status: '',	list_leader_reviewer: '',	nominees: '',	leader_reviewers: '',
  	list_nominee: [{	name: '',	person_no: '',	manager: '',	email: '',	line: '',	award_type: '',	award_amount: '',	notes: '',	status: '',	dept_id: '',	region: '',	market: '',	initial_contribution_level: '',	final_contribution_level: ''
  }]
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private nominationservice: NominationService, private nomineeservice: NomineeService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.nomineeservice.get_all_Nominee()
    	.subscribe(data => {
    	console.log("data", data);
    	this.array_Nominee = data;
    });

  }


  create_Nomination(){
      this.nominationservice.create_Nomination(this.nomination)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}