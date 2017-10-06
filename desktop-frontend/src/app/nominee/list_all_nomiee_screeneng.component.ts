import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NomineeService } from './nominee.service';
import { GridOptions } from 'ag-grid';
import { INominee } from './nominee';

@Component({
    moduleId: module.id,
    templateUrl: 'list_all_nomiee_screeneng.component.html'
})
export class List_All_Nomiee_ScreenengComponent implements OnInit {
  private Table_NomineesGridOptions: GridOptions;

  private nominee: INominee = {
  	id: 0,
  	name: '',	person_no: '',	manager: '',	email: '',	line: '',	award_type: '',	award_amount: '',	notes: '',	status: '',	dept_id: '',	region: '',	market: '',	initial_contribution_level: '',	final_contribution_level: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private nomineeservice: NomineeService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_NomineesGridOptions = {
    	columnDefs: [
    		{
    			headerName: "Name",
    			field: "name",
    		},
    		{
    			headerName: "Person_no",
    			field: "person_no",
    		},
    		{
    			headerName: "Manager",
    			field: "manager",
    		},
    		{
    			headerName: "Email",
    			field: "email",
    		},
    		{
    			headerName: "Line",
    			field: "line",
    		},
    		{
    			headerName: "Award_type",
    			field: "award_type",
    		},
    		{
    			headerName: "Award_amount",
    			field: "award_amount",
    		},
    		{
    			headerName: "Notes",
    			field: "notes",
    		},
    		{
    			headerName: "Status",
    			field: "status",
    		},
    		{
    			headerName: "Dept_id",
    			field: "dept_id",
    		},
    		{
    			headerName: "Region",
    			field: "region",
    		}
    	],

    	rowData : [],	rowSelection: 'single',
    	onRowClicked: function(event) {
    		console.log('a row was clicked');
    	}
    };

  }

  ngOnInit() {
 this.get_all_Nominee();
  }

  get_all_Nominee(){
      this.nomineeservice.get_all_Nominee()
          .subscribe(data => {
            console.log("data", data);
              this.Table_NomineesGridOptions.api.setRowData(data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }


}