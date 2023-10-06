import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';
import {UiService} from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onSaveTask:EventEmitter<Task>=new EventEmitter();
  text!: string;
  day!:string ;
  reminder:boolean=false;
  showAddTask:boolean=false;
  subscription:Subscription;


  constructor(private uiService:UiService){
    this.subscription=this.uiService.onToggle().subscribe((value)=>(this.showAddTask=value))
  }

  ngOnInit(): void {}

  onSubmit(): void{
    if(!this.text || !this.day){
      alert("please add a task and day");
    
    }

    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.onSaveTask.emit(newTask);
   

    this.text='',
    this.day='',
    this.reminder=false;
    
  }

}
