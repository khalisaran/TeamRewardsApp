import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Leader_reviewerService } from './leader_reviewer.service';
import { GridOptions } from 'ag-grid';
import { ILeader_reviewer } from './leader_reviewer';

@Component({
    moduleId: module.id,
    templateUrl: 'getall_leader_reviewer_screeneng.component.html'
})
export class GetAll_Leader_Reviewer_ScreenengComponent implements OnInit {
  private Table_75451GridOptions: GridOptions;

  private leader_reviewer: ILeader_reviewer = {
  	id: 0,
  	leader_name: '',	guid: '',	status: '',	is_edit_request: '',	is_wording_accurate: '',	suggest_rank: '',	comments: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private leader_reviewerservice: Leader_reviewerService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_75451GridOptions = {
    	columnDefs: [
    		{
    			headerName: "Leader_name",
    			field: "leader_name",
    		},
    		{
    			headerName: "Guid",
    			field: "guid",
    		},
    		{
    			headerName: "Status",
    			field: "status",
    		},
    		{
    			headerName: "Is_edit_request",
    			field: "is_edit_request",
    		},
    		{
    			headerName: "Is_wording_accurate",
    			field: "is_wording_accurate",
    		},
    		{
    			headerName: "Suggest_rank",
    			field: "suggest_rank",
    		},
    		{
    			headerName: "Comments",
    			field: "comments",
    		}
    	],

    	rowData : [],	rowSelection: 'single',
    	onRowClicked: function(event) {
    		console.log('a row was clicked');
    	}
    };

  }

  ngOnInit() {
  this.get_all_Leader_reviewer();
  }


  get_all_Leader_reviewer(){
      this.leader_reviewerservice.get_all_Leader_reviewer()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
             this.Table_75451GridOptions.api.setRowData(data);
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}