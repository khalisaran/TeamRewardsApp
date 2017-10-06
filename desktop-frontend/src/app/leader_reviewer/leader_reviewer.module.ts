import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Create_Leader_Reviewer_ScreenengComponent } from './create_leader_reviewer_screeneng.component';
import { Update_Leader_Reviewer_ScreenengComponent } from './update_leader_reviewer_screeneng.component';
import { GetAll_Leader_Reviewer_ScreenengComponent } from './getall_leader_reviewer_screeneng.component';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular/main';
import { Leader_reviewerService } from './leader_reviewer.service';

@NgModule({
    declarations: [
        Create_Leader_Reviewer_ScreenengComponent,
        Update_Leader_Reviewer_ScreenengComponent,
        GetAll_Leader_Reviewer_ScreenengComponent
    ],
    imports: [
        FormsModule,
        MdInputModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'Create_Leader_Reviewer_Screeneng', component: Create_Leader_Reviewer_ScreenengComponent},
            { path: 'Update_Leader_Reviewer_Screeneng', component: Update_Leader_Reviewer_ScreenengComponent},
            { path: 'GetAll_Leader_Reviewer_Screeneng', component: GetAll_Leader_Reviewer_ScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        Leader_reviewerService
    ]
})

export class Leader_reviewerModule {

}