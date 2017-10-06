import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Nominee_Creation_ScreenengComponent } from './nominee_creation_screeneng.component';
import { Update_Nominee_screenengComponent } from './update_nominee_screeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NominationService } from './nomination.service';

@NgModule({
    declarations: [
        Nominee_Creation_ScreenengComponent,
        Update_Nominee_screenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        MdSelectModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'Nominee_Creation_Screeneng', component: Nominee_Creation_ScreenengComponent},
            { path: 'Update_Nominee_screeneng', component: Update_Nominee_screenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        NominationService
    ]
})

export class NominationModule {

}