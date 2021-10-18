import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  // en el curso lo tiene definido de esta forma
  //public courses: Course[];
  // en el curso esta sin inicializar
  //public subCourses: Subscription;

  public courses: Course[] = [];
  public subCourses: Subscription = new Subscription;

  constructor(public courseService: CourseService) { }

  ngOnDestroy(): void {
    this.subCourses.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.subCourses = this.courseService.getAll().subscribe(data => {this.courses = data;});
  }

}
