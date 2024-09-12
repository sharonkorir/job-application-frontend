import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-jobseeker',
  templateUrl: './login-jobseeker.component.html',
  styleUrls: ['./login-jobseeker.component.css']
})
export class LoginJobseekerComponent implements OnInit {

  form!: FormGroup;
  
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        email: '',
        password: ''
      });
    }
  
    submit(): void {
      this.http.post('https://moiwork.herokuapp.com/login', this.form.getRawValue(), {
        withCredentials: true
      }).subscribe(() => this.router.navigate(['/jobseeker-profile']));
    }
  }
  