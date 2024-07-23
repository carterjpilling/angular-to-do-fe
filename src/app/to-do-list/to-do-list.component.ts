import { Component } from '@angular/core';
import { ToDosComponent } from '../to-dos/to-dos.component';
import { CommonModule } from '@angular/common';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDosComponent, CommonModule, ToDoFormComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  public toDos = [];

  constructor() {
    this.fetchToDos();
  }

  public deleteTask(id: number) {
    fetch(`http://localhost:5000/api/${ id }`, {
      method: 'DELETE'
    }).then(() => {
      this.fetchToDos();
    });
  }

  public addTask(event: any) {
    console.log(event)
    fetch('http://localhost:5000/api', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((data) => {
      this.fetchToDos();
    }).catch(error => console.log(error));


  }

  public updateCompletedStatus(event: { id: string, completedStatus: boolean }) {
    fetch(`http://localhost:5000/api/completed/${ event.id }/${ event.completedStatus }`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => this.fetchToDos())
      .catch(error => console.log(error));
  }

  public editTask() {


  }

  public fetchToDos() {
    fetch('http://localhost:5000/api').then(response => {
      return response.json();
    }).then(data => {
      this.toDos = data;
    });

  }

}
