import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { ToolbarComponent } from './components/header/toolbar/toolbar.component';
import { StarterComponent } from './components/starter/starter.component';
import { NotesComponent } from './components/notes/notes.component';
import { PlannerComponent } from './components/planner/planner.component';
import { GoalsComponent } from './components/goals/goals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesService } from './services/notes.service';
import { NotesCoverComponent } from './components/notes/notesCover/notesCover.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    ToolbarComponent,
    StarterComponent,
    NotesComponent,
    PlannerComponent,
    GoalsComponent,
    NotesCoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
