import {Component, EventEmitter, Input, Output, signal, inject} from '@angular/core';
import {Task} from '../task/task.model';
import {NewTaskData} from './new-task.model';
import {FormsModule} from '@angular/forms';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
 // enteredTitle = '';
 // enteredSummary = '';
 // enteredDate = '';

  //signal feature
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  private tasksService = inject(TaskService)


  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask(
      {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    },
    this.userId
    )
  }
}
