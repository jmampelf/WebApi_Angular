import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../domain/course';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // en el curso hay esta linea, pero en mi version me pide que inicialize la variable,
  // la inicializo y no da error, aunque veo que posteriormente en el constructor ya la inicializa
 // public url: string;
 
 public url: string = '';
 public urlget: string = '';
 public urlpost: string = '';
 public urlput: string = '';
 public urlgetbyid: string = '';
 public urldelete: string = '';

  constructor(public httpClient: HttpClient) { 
    //this.url = './assets/MOCK_DATA.json';

    //this.urlget = 'https://localhost:44345/api/Courses/GetAllAngular';    
    //this.urlpost = 'https://localhost:44345/api/Courses/PostAngular';  
     
    //this.urlget = 'https://localhost:44345/api/Courses/GetAll/';    
    //this.urlpost = 'https://localhost:44345/api/Courses/Post';  
    //this.urlput = 'https://localhost:44345/api/Courses/Put/';      
    //this.urlgetbyid = 'https://localhost:44345/api/Courses/GetById/';      
    //this.urldelete = 'https://localhost:44345/api/Courses/Delete/'; 
    
    this.urlget = environment.apiUrl + 'api/Courses/GetAll/';    
    this.urlpost = environment.apiUrl + 'api/Courses/Post';  
    this.urlput = environment.apiUrl + 'api/Courses/Put/';      
    this.urlgetbyid = environment.apiUrl + 'api/Courses/GetById/';      
    this.urldelete = environment.apiUrl + 'api/Courses/Delete/'; 
    

  }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.urlget);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.urlgetbyid + id);
  }

  public save(course: Course): Observable<any>{
    return this.httpClient.post(this.urlpost, course);
  }

  public edit(course: Course): Observable<any>{
    //return this.httpClient.put(this.urlput + '/' + course.CourseID, course);
    return this.httpClient.put(this.urlput + course.CourseID, course);
  }

  public delete(id: number) /*: Observable<any>*/ {
    return this.httpClient.delete(this.urldelete + id);
  }

}
