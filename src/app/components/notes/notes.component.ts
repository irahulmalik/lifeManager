import { Component, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subject, Subscription } from "rxjs";
import { note } from "src/app/models/note.model";
import { NotesService } from "src/app/services/notes.service";

@Component({
    selector:"app-goals",
    templateUrl:"./notes.component.html",
    styleUrls:["./notes.component.css"]
})
export class NotesComponent implements OnInit{
    noteForm: FormGroup;
    my_subscription: Subscription;
    title: string="My title"
    subject: string="my sub"
    body: string = "Content"
    @Output() mynotes: Array<note>= [];
    mynote: note;
    private unsubscribe = new Subject<void>()
    constructor(private noteService:NotesService){}
    ngOnInit() {
        this.noteForm = new FormGroup({
            title: new FormControl(''),
            subject: new FormControl(''),
            author: new FormControl('User'),
            body: new FormControl(''),
            // file: new FormControl('')
        })
        this.my_subscription = this.noteForm.valueChanges.subscribe(formValue => {
            // console.log(formValue)
            this.mynote = formValue
            // console.log(this.mynote)
        })
        // this.mynotes.push(this.mynote)
        // this.noteService.addNote(this.mynote)  
        console.log("Calling here")
    }
    
    ngOnDestroy() {
        this.noteService.addNote(this.mynote)
        console.log("called here")
        this.my_subscription.unsubscribe()
    }
}