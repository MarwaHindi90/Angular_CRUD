import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { Title } from '@angular/platform-browser';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskId:any;
  task:Task;

  constructor(private _TasksService:TasksService, private route: ActivatedRoute, private router:Router, private title:Title) { 
    this.title.setTitle(" Task Manger ")
  }

  
  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id')
      this.task = this._TasksService.tasks[this.taskId]
  }

  saveTask() {
    this._TasksService.editTask(this.taskId, this.task)
    this.router.navigate(['/'])
  }

  deleteTask(){
   
    this._TasksService.deleteTask(this.taskId)
    this.router.navigate(['/'])
  }
}
