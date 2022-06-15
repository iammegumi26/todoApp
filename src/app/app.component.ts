import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todoTitle: any;
  todoSelect: any;
  todoDesc: any;
  todoOpt1: any;
  todoOpt2: any;
  todoOpt3: any;
  todoList: any = [];
  isEdit: boolean = false;
  id: any;
  ngOnInit() {
    if (localStorage.getItem('list') == null) {
      this.todoList = [];
    } else {
      let tempVar: any = localStorage.getItem('list');
      this.todoList = JSON.parse(tempVar);
    }
  }
  saveTodoForm(values: NgForm, edit: boolean): void {

    if (edit) {
      this.todoList.map((ele: any, index: any) => {
        if (ele.id == values.value.id) {
          this.todoList[index].desc = values.value.desc
          this.todoList[index].prio = values.value.prio
          this.todoList[index].title = values.value.title
          this.todoList[index].workCategory = values.value.workCategory
        }
      })
      this.isEdit = false;
      this.clearForm();
    } else {
      var obj = values.value;
      obj.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
      this.todoList.push(obj);
      this.clearForm();
    }
    localStorage.setItem('list', JSON.stringify(this.todoList))
  }
  clearForm() {
    this.todoTitle = '';
    this.todoSelect = '';
    this.todoDesc = '';
    this.todoOpt1 = '';
    this.todoOpt2 = '';
    this.todoOpt3 = '';
  }
  edit(item: any) {
    this.isEdit = true;
    let selectedTask = this.todoList.filter((ele: any) => {
      return ele.id == item.id;
    })
    this.id = selectedTask[0].id;
    this.todoTitle = selectedTask[0].title;
    this.todoSelect = selectedTask[0].workCategory;
    this.todoDesc = selectedTask[0].desc;
    this.todoOpt1 = selectedTask[0].prio == 'Low' ? selectedTask[0].prio : '';
    this.todoOpt2 = selectedTask[0].prio == 'Medium' ? selectedTask[0].prio : '';
    this.todoOpt3 = selectedTask[0].prio == 'High' ? selectedTask[0].prio : '';
  }
  async delete(item: any) {
    let tempArr: any = [];
    await Promise.all(this.todoList.map((ele: any) => {
      if (ele.id != item.id) {
        tempArr.push(ele);
      }
    }))
    this.todoList = tempArr;
    localStorage.setItem('list', JSON.stringify(this.todoList))
  }
}
