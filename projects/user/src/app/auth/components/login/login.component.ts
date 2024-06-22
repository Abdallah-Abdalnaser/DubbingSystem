import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  type:string="password";
  passwordVisible = false;
  faEyeSlash:IconDefinition=faEyeSlash;
  faEye:IconDefinition=faEye;
  fetching:boolean=true;


  constructor(private AuthService:AuthService , private router:Router , private route:ActivatedRoute) {}


  onSubmit(form:NgForm) {
    this.fetching = false;
    this.AuthService.logIn(form.value).subscribe(
      (data:any)=> {
        localStorage.setItem("token",data.data);
        this.router.navigate(['../../home'],{relativeTo:this.route})
        this.fetching = true;
      }
    )
  }



  showpassword() {
    if (this.type === "password") {
      this.type = "text";
      this.passwordVisible=!this.passwordVisible
    }else {
      this.type = "password";
      this.passwordVisible=!this.passwordVisible
    }
  }
}
