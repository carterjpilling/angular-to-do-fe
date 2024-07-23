import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-dos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-dos.component.html',
  styleUrl: './to-dos.component.scss'
})
export class ToDosComponent {
  @Input({ required: true }) toDo: any = {};
  @Input() saveInProgress: boolean = false;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() addTaskOutput = new EventEmitter<any>();
  @Output() updateTaskCompletedStatus = new EventEmitter<{ id: string, completedStatus: boolean }>()



  public addTask() {
    this.addTaskOutput.emit();
  }

  public changeCompletedStatus() {
    this.updateTaskCompletedStatus.emit({ id: this.toDo._id, completedStatus: !this.toDo.completed })
  }
}
