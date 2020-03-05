import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { DataBindingSampleComponent } from './data-binding-sample/data-binding-sample.component';
import { ViewModuleModule } from './view-module/view-module.module';
import { SampleServiceService } from './sample-service.service';
import { RestSampleComponent } from './rest-sample/rest-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AddressCardComponent,
    DataBindingSampleComponent,
    RestSampleComponent    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ViewModuleModule
  ],
  providers: [
    SampleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
