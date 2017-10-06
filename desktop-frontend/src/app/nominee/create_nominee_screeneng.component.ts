import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NomineeService } from './nominee.service';
import { INominee } from './nominee';

@Component({
    moduleId: module.id,
    templateUrl: 'create_nominee_screeneng.component.html'
})
export class Create_Nominee_screenengComponent implements OnInit {
  private nominee: INominee = {
  	id: 0,
  	name: '',	person_no: '',	manager: '',	email: '',	line: '',	award_type: '',	award_amount: '',	notes: '',	status: '',	dept_id: '',	region: '',	market: '',	initial_contribution_level: '',	final_contribution_level: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private nomineeservice: NomineeService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Nominee(){
      this.nomineeservice.create_Nominee(this.nominee)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Nominee(){
      this.nomineeservice.get_all_Nominee()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}