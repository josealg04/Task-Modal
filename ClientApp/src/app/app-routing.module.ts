import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { ModalComponent } from './modal/modal.component';
const routes: Routes = [
  {
    path: 'tasklist',
    component: TaskListComponent
  },
  {
    path: 'taskadd',
    component: TaskAddComponent
  },
  {
    path: 'taskedit/:id',
    component: TaskEditComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
