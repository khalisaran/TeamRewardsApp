import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home/home.directive';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { FooterComponent } from './footer/footer.component';
import { FooterDirective } from './footer/footer.directive';
import { SharedService } from './shared/shared.service';
import { ConfigService } from './config/config.service';
import { ApiService } from './config/api.service';
import { customHttpProvider } from './_helpers/custom-http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { NominationModule } from './nomination/nomination.module';
import { NomineeModule } from './nominee/nominee.module';
import { Leader_reviewerModule } from './leader_reviewer/leader_reviewer.module';
import { HeaderENComponent } from './header/header-en.component';
import { HeaderDEComponent } from './header/header-de.component';
import { FooterENComponent } from './footer/footer-en.component';
import { FooterDEComponent } from './footer/footer-de.component';
import { HomeENComponent } from './home/home-en.component';
import { HomeDEComponent } from './home/home-de.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent },

     { path: '', redirectTo: 'home', pathMatch: 'full'},
     { path: '**', redirectTo: 'home', pathMatch: 'full'}


    ]),
NominationModule,
NomineeModule,
Leader_reviewerModule
  ],
  providers: [
    SharedService,
    ConfigService,
    ApiService,
    customHttpProvider
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeDirective,
    HeaderDirective,
    FooterDirective,
HeaderENComponent,
HeaderDEComponent,
FooterENComponent,
FooterDEComponent,
HomeENComponent,
HomeDEComponent
  ],
  entryComponents: [
    HeaderENComponent,
    HeaderDEComponent,
    FooterENComponent,
    FooterDEComponent,
    HomeENComponent,
    HomeDEComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }