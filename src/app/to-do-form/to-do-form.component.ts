import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.scss'
})
export class ToDoFormComponent {

  @Output() newTask = new EventEmitter<any>();
  taskTitle = new FormControl('');
  taskDueDate = new FormControl('');
  taskCompletedStatus = new FormControl(false);


  public onSubmit() {

    const task = {
      title: this.taskTitle.value,
      dueDate: this.taskDueDate.value,
      completed: this.taskCompletedStatus.value
    };

    this.newTask.emit(task);
  }
}
