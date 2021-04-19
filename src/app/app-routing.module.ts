import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './components/goals/goals.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesCoverComponent } from './components/notes/notesCover/notesCover.component';
import { PlannerComponent } from './components/planner/planner.component';
import { StarterComponent } from './components/starter/starter.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: "",
    component: StarterComponent
  },
  {
    path: "todo",
    component: TodoComponent
  },
  {
    path: "notes",
    component: NotesCoverComponent,
  },
  {
    path:':title',
    component:NotesComponent
  },
  {
    path: "addnote",
    component: NotesComponent
  },
  {
    path: "goals",
    component: GoalsComponent
  },
  {
    path: "planner",
    component: PlannerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
