import { Component,OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { WorkoutPage} from '../../pages/workout/workout';
import { WorkoutService } from '../../app/services/workout.service';


@Component({
 templateUrl: 'workout-details.html',
 providers:[WorkoutService]
})

export class WorkoutDetailsPage {

workout:{};
result:any;
  constructor(private navCtrl: NavController, private navParams: NavParams,private workoutService:WorkoutService) {
    this.workoutService = workoutService;
    this.workout = this.navParams.get('workout');

    }

deleteWorkout(workoutId){
  this.workoutService.deleteWorkout(workoutId).subscribe(data => {
    this.result = data
  },
  err =>console.log(err),
  ()=>console.log('workout deleted'));

  this.navCtrl.setRoot(WorkoutPage);
}


}
