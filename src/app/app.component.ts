import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todoTitle:any;
  todoSelect:any;
  todoDesc:any;
  todoOpt1:any;
  todoOpt2:any;
  todoOpt3:any;
  todoList:any =[];
  saveTodoForm(values:NgForm):void{
    // debugger;
    var obj = values.value;
    console.log(obj,'ooooo')
this.todoList.push(obj);
console.log(this.todoList,'ooooo')
this.clearForm();
  }
  clearForm(){
  this.todoTitle='';
  this.todoSelect='';
  this.todoDesc='';
  this.todoOpt1='';
  this.todoOpt2='';
  this.todoOpt3='';
  }
  edit(item:any){
    console.log(item,'itemmmmmm')
  }
}
