import { Injectable } from '@angular/core';
//import {TASKS} from "../mock-tasks";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../Task";
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl="Http://localhost:5000/tasks";

  constructor(private Http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.Http.get<Task[]>(this.apiUrl);

  }

  deleteTask(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.Http.delete<Task>(url)
  }
}
