import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  userCount = 1;

  newTask = {
    title: '',
    user: Array.from(Array(this.userCount), (_, i) => i + 1),
    date: new Date().toDateString(),
    imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    attachments: Math.floor(Math.random() * (5 - 1)) + 1,
    discussion: Math.floor(Math.random() * (5 - 1)) + 1
  };

  constructor(
    public dialogRef: MatDialogRef<NewTaskComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }
}
