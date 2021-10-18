import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  
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

  // pruebas segun web
  // getById(){
  //   this.courseService.getById(this.id).subscribe(data => {
  //     this.course=data['id'];
  //     this.router.navigate(['/second, users.id'])
  //   })

  getById(){

    // pruebas segun web inicio
    // let param = this.activatedRouter.params.subscribe(params =>{
    //   const id: any = params['id'] || null;
    // })

    // let param = this.activatedRouter.params.subscribe(params =>{
    //   const id: any = params['id]'];
    // })

    // let param = this.activatedRouter.queryParams.subscribe(params => {
    //   const id: any = params['id'] || null;
    //   // Código...
    // });
    // pruebas segun web inicio

    // segun curso, y da error
    //let param = this.activatedRouter.params['_value'];
    //this.id = param.id;

    
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

    public edit(){
      console.log(this.course);

      this.courseService.edit(this.course).subscribe(data => {
        this.router.navigate(['/course-list']);
      }, error => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      });
  
    }
}
