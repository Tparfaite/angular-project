import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean=false;
  private addTaskSubject=new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask ;
    this.addTaskSubject.next(this.showAddTask);
  }

 onToggle():Observable<any>{
  return this.addTaskSubject.asObservable();
 }
}
