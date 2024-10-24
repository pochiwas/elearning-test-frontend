import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  courses: any[] = [];

  constructor(private userService: UserService, private courseService: CourseService) {}

  ngOnInit(): void {
    this.getUsers();
    this.getCourses();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
}
