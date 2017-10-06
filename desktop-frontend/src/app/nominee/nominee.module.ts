import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Create_Nominee_screenengComponent } from './create_nominee_screeneng.component';
import { Update_Nominee_ScreenengComponent } from './update_nominee_screeneng.component';
import { List_All_Nomiee_ScreenengComponent } from './list_all_nomiee_screeneng.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { NomineeService } from './nominee.service';

@NgModule({
    declarations: [
        Create_Nominee_screenengComponent,
        Update_Nominee_ScreenengComponent,
        List_All_Nomiee_ScreenengComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'Create_Nominee_screeneng', component: Create_Nominee_screenengComponent},
            { path: 'Update_Nominee_Screeneng', component: Update_Nominee_ScreenengComponent},
            { path: 'List_All_Nomiee_Screeneng', component: List_All_Nomiee_ScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        NomineeService
    ]
})

export class NomineeModule {

}