import { Component, OnInit } from '@angular/core';
import {TasksService } from 'src/app/services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serviceContainer:any;

  constructor(private _TasksService:TasksService, private title:Title) {
      this.serviceContainer = _TasksService.tasks;
      this.title.setTitle("Task Manager")
   }

  ngOnInit() {
  }

  deleteTask(i)
  {
    
    this._TasksService.deleteTask(i)
  }

  editTask()
  {
    this._TasksService.editTask
  }
}
