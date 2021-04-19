import { Injectable } from '@angular/core';
import { note } from '../models/note.model';
import { notes } from '../models/notes.model'
@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: notes[] = []

  constructor() { 
    // localStorage.setItem(mynotes: notes)
  }
  addNote(note){
    let mynotes: Array<note>= [];
    mynotes.push(note)
    let mynote:notes = {
      user: "guest",
      notes: mynotes
    }
    this.notes.push(mynote)
    console.log(this.notes)
    // cahc
  }
  getNotes(){
    return this.notes
  }
}