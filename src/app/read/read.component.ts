import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store'; // Import our actions at the top
import * as TutorialActions from './../actions/tutorial.actions';



@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }
  tutorials: Observable<Tutorial[]>;

// In the class, add:
delTutorial(index) {
  this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
}
  ngOnInit() {
  }

}
