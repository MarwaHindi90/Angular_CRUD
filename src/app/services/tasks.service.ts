import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

tasks : Array<Task> = [];

constructor() {
  let saveTasks = localStorage.getItem('tasks')
  if (saveTasks) {
    this.tasks = JSON.parse(saveTasks)
  }
  else this.tasks = []
 }

  deleteTask(i)
  {
    alert("are u sure!")
    this.tasks.splice(i, 1)
    this.saveAll()
  }

  saveTask(title, description)
  {
    this.tasks.push({title, description})
    this.saveAll()
  }

  editTask(i, data)
  {
  this.tasks[i]= data;
  this.saveAll()
  }

  saveAll()
  {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}