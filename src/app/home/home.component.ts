import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../task.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newTask: Task;

  toDo: Task[] = [{
    title: 'Create the project',
    user: ['1', '2'],
    date: '02/08/2020',
    imagePath: '',
    attachments: 0,
    discussion: 0
  },
  {
    title: 'This is task two. Please complete the assignment before 12pm',
    user: ['1'],
    date: '07/20/2020',
    imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    attachments: 0,
    discussion: 5
  }];

  inProgress: Task[] = [{
    title: 'This is task is in Progress. Please complete the assignment before 12pm',
    user: ['1', '2', '3'],
    date: '07/20/2020',
    imagePath: '',
    attachments: 0,
    discussion: 5
  }
  ];

  inReview: Task[] = [{
    title: 'This is task two. Please complete the assignment before 12pm',
    user: ['1'],
    date: '06/15/2020',
    imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    attachments: 0,
    discussion: 5
  },
  {
    title: 'This is task two. Please complete the assignment before 12pm',
    user: ['1', '2', '3', '4'],
    date: '10/07/2020',
    imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    attachments: 0,
    discussion: 0
  }];

  done: Task[] = [{
    title: 'Create initial UI',
    user: ['1'],
    date: '06/06/2020',
    imagePath: '',
    attachments: 4,
    discussion: 0
  }];

  constructor(public matDialog: MatDialog) {
    if (localStorage.getItem('toDo') !== undefined) {
      this.toDo = JSON.parse(localStorage.getItem('toDo'));
    }
    if (localStorage.getItem('inProgress') !== undefined) {
      this.inProgress = JSON.parse(localStorage.getItem('inProgress'));
    }
    if (localStorage.getItem('inReview') !== undefined) {
      this.inReview = JSON.parse(localStorage.getItem('inReview'));
    }
    if (localStorage.getItem('done') !== undefined) {
      this.done = JSON.parse(localStorage.getItem('done'));
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.container.data.length);
      localStorage.setItem('toDo', JSON.stringify(this.toDo));
      localStorage.setItem('inProgress', JSON.stringify(this.inProgress));
      localStorage.setItem('inReview', JSON.stringify(this.inReview));
      localStorage.setItem('done', JSON.stringify(this.done));
    }
  }

  openModal() {
    const dialogRef = this.matDialog.open(NewTaskComponent, {
      width: '250px',
      disableClose: true 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('The dialog was closed');
        this.newTask = result;
        console.log(this.newTask);
        this.toDo.push(this.newTask);
        localStorage.setItem('toDo', JSON.stringify(this.toDo));
      }
    });
  }
}
