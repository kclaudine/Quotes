import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SearchRequestService} from './search-request.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe } from './upper-case.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositoriesComponent,
    SearchFormComponent,
    UserInfoComponent,
    UpperCasePipe
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    FormsModule,
   
    HttpClientModule,
  

  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }


