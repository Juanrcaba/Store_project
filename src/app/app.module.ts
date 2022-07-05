import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AuthModule } from './modules/auth/auth.module';
import { FeaturesComponent } from './features/features.component';
import { FeaturesModule } from './features/features.module';
import { ProductModule } from './modules/product/product.module';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AuthModule,
    FeaturesModule,
    ProductModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
