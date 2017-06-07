import { NgModule, ErrorHandler } from '@angular/core';
import {Http,Headers,RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutPage} from '../pages/workout/workout';
import {AddWorkoutPage} from '../pages/add-workout/add-workout';
import {WorkoutDetailsPage} from '../pages/workout-details/workout-details';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutPage,
    AddWorkoutPage,
    WorkoutDetailsPage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutPage,
    AddWorkoutPage,
    WorkoutDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
