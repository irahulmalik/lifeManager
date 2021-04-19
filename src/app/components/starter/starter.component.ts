import { Component, OnInit } from "@angular/core";

@Component({
    selector:"app-starter",
    templateUrl:"./starter.component.html",
    styleUrls:["./starter.component.css"]
})
export class StarterComponent implements OnInit{
    myday: String;
    ngOnInit(){
        const date = new Date()
        const todayDate = date.getHours()
        if(todayDate < 12 && todayDate >= 4){
            this.myday = "Morning";
        }else if(todayDate >= 12 && todayDate < 16){
            this.myday = "Afternoon"
        }else if(todayDate >= 16 && todayDate < 20){
            this.myday = "Evening"
        }else if(todayDate >=20 && todayDate < 3)
        console.log(todayDate)

    }
}