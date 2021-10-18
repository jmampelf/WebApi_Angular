import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  //public course: Course;
  public course: Course = new Course(0, '', 0);

  public showMsg : boolean = false;
  //public msg: string;
  public msg: string = "";
  //public type: string;
  public type: string = "";

  public id: number = 0;

  constructor(public courseService: CourseService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    
    // segun curso, correcion del profe
    let param = this.activatedRouter.snapshot.paramMap.get('id');  
    this.id = Number(param);

    console.log("Valor de Id ---->>>>: " + this.id);    

    this.courseService.getById(this.id).subscribe(data => {
      console.log("dentro");
            
      this.course = data;

      console.log(this.course);      
    });
  }

  public delete(){
    console.log(this.course);

    this.courseService.delete(this.course.CourseID).subscribe(data => {
      this.router.navigate(['/course-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });

  }

}
