import { Injectable,Inject } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import { Observable } from  'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutService{
  static get parameters(){
    return [Http];
  }
  apiKey:string;
  workoutsUrl:string;

  constructor(private http:Http){
    this.http = http;
    this.apiKey ='HHFBSnqkvcwW_NZ5w39Zx3ekrPKXLoGC';
    this.workoutsUrl='https://api.mlab.com/api/1/databases/myworkouts-app/collections/workouts';
  }

  getWorkouts(){
      return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey).map(res =>res.json());
  }

  addWorkout(workout){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey,JSON.stringify(workout),
    {headers:headers})
    .map(res => res.json());
  }
  deleteWorkout(workoutId){
    return this.http.delete(this.workoutsUrl+'/'+workoutId+'?apiKey='+this.apiKey).map(res =>res.json());
  }
}
