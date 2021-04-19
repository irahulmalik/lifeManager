import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    showTodosList = false
    showPlannerList = false
    showGoalsList = false
    showNotesList = false
    constructor() {}
    name = "I am Header"

    
}