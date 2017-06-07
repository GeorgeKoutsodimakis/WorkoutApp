import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';
import { WorkoutPage} from '../../pages/workout/workout';


@Component({
  selector: 'add-workout-page',
  templateUrl: 'add-workout.html',
  providers: [WorkoutService]
})
export class AddWorkoutPage {

title:string;
note:any;
type:any;
result:any;

  constructor(public navCtrl: NavController,private workoutService:WorkoutService) {
      this.workoutService = workoutService;
      this.title;
      this.note;
      this.type;
  }
  onSumbit(){
    var workout = {
      title: this.title,
      note:this.note,
      type:this.type
    }
  //add workout
  this.workoutService.addWorkout(workout).subscribe(data => {
    this.result = data
  },
  err =>console.log(err),
  ()=>console.log('workout added'));

  this.navCtrl.setRoot(WorkoutPage);

  }

}
