import { type NewTaskData} from './new-task/new-task.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TaskService {
  private tasks = [
    {


      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first Prototype',
      summary: 'Build first prototype of the online shop website.',
      dueDate: '2025-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Prepare and describe an issue template which will help with project management.',
      dueDate: '2025-06-15'
    }
  ];

  getUserTask(userId: string){
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    // this.isAddingTask = false;
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

}
