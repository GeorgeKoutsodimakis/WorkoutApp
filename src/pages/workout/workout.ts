import { Component,OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';
import { WorkoutDetailsPage } from '../../pages/workout-details/workout-details';


@Component({
 templateUrl: 'workout.html',
  providers:[WorkoutService]
})

export class WorkoutPage {

  workouts:any;

  constructor(public navCtrl: NavController,private workoutService:WorkoutService,private navParams:NavParams) {
    this.workoutService = workoutService;
    this.workouts;
    this.navParams = navParams;
    this.workoutService.getWorkouts().subscribe(workouts => { this.workouts = workouts ;  });
  }

  ngOnInit(){
    this.workoutService.getWorkouts().subscribe(workouts => { this.workouts = workouts ;  });
  }

  workoutSelected(event,workout){
    this.navCtrl.push(WorkoutDetailsPage,{workout : workout });
    }


}
