import { Component, Input, OnInit } from "@angular/core";
import { NotesService } from "src/app/services/notes.service";

@Component({
    selector:"app-notesCover",
    templateUrl:"./notesCover.component.html",
    styleUrls:["./notesCover.component.css"]
})
export class NotesCoverComponent implements OnInit{
    mynotes;
    notesExists: boolean= false;
    constructor(private noteService: NotesService){}
    ngOnInit(){
        this.mynotes = this.noteService.getNotes();
        console.log("Sup bru")
        if(this.mynotes[0]){
            console.log("notes exists")
            this.notesExists = true;
            console.log(this.mynotes)
        }
    }
}