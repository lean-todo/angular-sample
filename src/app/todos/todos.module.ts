import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoItemComponent],
  exports: [TodoItemComponent],
  providers: [StoreService]
})
export class TodosModule { }
