import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NomineeService } from './nominee.service';
import { INominee } from './nominee';

@Component({
    moduleId: module.id,
    templateUrl: 'update_nominee_screeneng.component.html'
})
export class Update_Nominee_ScreenengComponent implements OnInit {
  private nominee: INominee = {
  	id: 0,
  	name: '',	person_no: '',	manager: '',	email: '',	line: '',	award_type: '',	award_amount: '',	notes: '',	status: '',	dept_id: '',	region: '',	market: '',	initial_contribution_level: '',	final_contribution_level: ''
  }
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private nomineeservice: NomineeService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    if(!this.nominee.id)
    	this.mymodalSFU.open();

  }


  update_Nominee(){
      this.nomineeservice.update_Nominee(this.nominee)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_Nominee(){
      this.mymodalSFU.close();
      this.nomineeservice.search_for_update_Nominee(this.nominee.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.nominee = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}