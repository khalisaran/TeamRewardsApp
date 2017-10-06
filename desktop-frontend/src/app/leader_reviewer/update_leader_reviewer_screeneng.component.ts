import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Leader_reviewerService } from './leader_reviewer.service';
import { ILeader_reviewer } from './leader_reviewer';

@Component({
    moduleId: module.id,
    templateUrl: 'update_leader_reviewer_screeneng.component.html'
})
export class Update_Leader_Reviewer_ScreenengComponent implements OnInit {
  private leader_reviewer: ILeader_reviewer = {
  	id: 0,
  	leader_name: '',	guid: '',	status: '',	is_edit_request: '',	is_wording_accurate: '',	suggest_rank: '',	comments: ''
  }
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private leader_reviewerservice: Leader_reviewerService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    if(!this.leader_reviewer.id)
    	this.mymodalSFU.open();


  }


  update_Leader_reviewer(){
      this.leader_reviewerservice.update_Leader_reviewer(this.leader_reviewer)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_Leader_reviewer(){
      this.mymodalSFU.close();
      this.leader_reviewerservice.search_for_update_Leader_reviewer(this.leader_reviewer.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.leader_reviewer = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  delete_Leader_reviewer(){
      this.leader_reviewerservice.delete_Leader_reviewer(this.leader_reviewer)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}