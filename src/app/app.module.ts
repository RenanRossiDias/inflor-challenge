import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { CheckinToolPageComponent } from './modules/pages/checkin-tool-page/checkin-tool-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { CheckinComponent } from './modules/components/checkin/checkin.component';
import { CheckinAnalyticsComponent } from './modules/components/checkin-analytics/checkin-analytics.component';
import { CheckinWorkersComponent } from './modules/components/checkin-workers/checkin-workers.component';
import { WorkerRegisterComponent } from './modules/components/worker-register/worker-register.component';
import { MomentModule } from 'ngx-moment';



@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    CheckinToolPageComponent,
    MainFooterComponent,
    CheckinComponent,
    CheckinAnalyticsComponent,
    CheckinWorkersComponent,
    WorkerRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
