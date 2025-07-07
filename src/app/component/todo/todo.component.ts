import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { todoItem } from '../../model/toDo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  toDoList: todoItem[] = [];
  newTask: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  addtask(): void {
    if (this.newTask.trim() !== '') {
      const newData: todoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      }
      this.toDoList.push(newData);
      this.newTask = '';
    }

  }

  deleteTask(id: number): void {
  this.toDoList = this.toDoList.filter(item=> item.id !== id);
  }

  toggleCompleted(index: number): void {
    this.toDoList[index].completed = !this.toDoList[index].completed;
    console.log(index, this.toDoList[index].completed);
  }

}
