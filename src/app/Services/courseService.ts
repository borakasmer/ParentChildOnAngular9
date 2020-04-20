import { Injectable } from '@angular/core';
import { Course } from '../Models/course';
import { ColumnDefs } from '../Models/columnDef';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    constructor() { }

    public GetCourseData() {
        let courseList: Course[];
        courseList = [new Course('Angular', 2400, 36, 1), new Course('.Net Core', 4000, 200, 2),
        new Course('Microservice', 2000, 20, 3), new Course('Azure', 1500, 15, 4)];

        return courseList;
    }

    public GetColumnDefData() {
        let columnDefList: ColumnDefs[];
        columnDefList = [new ColumnDefs("Kurs Adı", "Name"), new ColumnDefs("Kurs Fiyat", "Price"), new ColumnDefs("Kurs Süresi", "TotalHours"), new ColumnDefs("Id", "Id")];

        return columnDefList;
    }
}