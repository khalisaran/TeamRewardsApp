import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Leader_reviewerService } from './leader_reviewer.service';
import { ILeader_reviewer } from './leader_reviewer';

@Component({
    moduleId: module.id,
    templateUrl: 'create_leader_reviewer_screeneng.component.html'
})
export class Create_Leader_Reviewer_ScreenengComponent implements OnInit {
  private leader_reviewer: ILeader_reviewer = {
  	id: 0,
  	leader_name: '',	guid: '',	status: '',	is_edit_request: '',	is_wording_accurate: '',	suggest_rank: '',	comments: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private leader_reviewerservice: Leader_reviewerService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Leader_reviewer(){
      this.leader_reviewerservice.create_Leader_reviewer(this.leader_reviewer)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}