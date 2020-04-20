import { Component } from '@angular/core';
import { Course } from './Models/course';
import { FormGroup } from '@angular/forms';
import { ColumnDefs } from './Models/columnDef';
import { CourseService } from './Services/courseService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newCourse: Course = new Course();
  title = 'Kurslar Uygulaması';
  courseList: Course[];

  columnDefList: ColumnDefs[];

  constructor(private service: CourseService) {
    this.courseList = service.GetCourseData();
    this.columnDefList = service.GetColumnDefData();
  }
  public saveForm(form: FormGroup) {

    //INSERT
    if (this.newCourse.Id == null) {
      //find and set maxID+1
      this.newCourse.Id = Math.max.apply(Math, this.courseList.map(function (course) { return course.Id; })) + 1;


      /* let newcourseList = this.courseList.slice(0);
      newcourseList.push(this.newCourse);

      form.markAsUntouched();

      this.newCourse = new Course();
      this.courseList = newcourseList; */
      this.updateCourseList(form);
    }
    //UPDATE
    else {
      let course = this.courseList.filter(list => list.Id == this.newCourse.Id);
      var updateCourseIndex = this.courseList.indexOf(course[0]);
      if (updateCourseIndex > -1) {
        this.courseList.splice(updateCourseIndex, 1);
      }

      console.log("Orginal Course:" + JSON.stringify(this.orginalcourse));
      this.updateCourseList(form);
    }

    console.log(JSON.stringify(this.courseList));
  }

  updateCourseList(form) {
    let newcourseList = this.courseList.slice(0); // Deep Copy
    //this.courseList[0].ColorList = ["Yellow", "Yellow", "Yellow"];
    newcourseList.push(this.newCourse);

    form.markAsUntouched();

    this.newCourse = new Course();
    this.courseList = newcourseList;
  }

  orginalcourse: Course;
  public getSelectedData(event) {
    this.newCourse = event;

    this.orginalcourse = { ...this.newCourse };
    //this.newCourse.ColorList = ["Yellow", "Yellow", "Yellow"];
    //this.newCourse.ColorList.push("Yellow");
  }

  public reverseBack() {
    if (this.orginalcourse != null) {
      this.newCourse = { ...this.orginalcourse };
    }
  }
}
