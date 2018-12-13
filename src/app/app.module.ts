import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FacebookModule } from 'ngx-facebook';
import { ToasterService } from './services/toaster.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedService } from './services/shared.service';
import { ShopifyErpnextService } from './services/shopify-erpnext.service';
import { ShopifySocialmediaService } from './services/shopify-socialmedia.service';
import { TopHeaderComponent } from './top-header/top-header.component';
import {MatTreeModule} from '@angular/material/tree';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    TopHeaderComponent,
    MainNavComponent
  ],
  imports: [
    MatTreeModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    FacebookModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [ToasterService, SharedService,ShopifyErpnextService, ShopifySocialmediaService],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
