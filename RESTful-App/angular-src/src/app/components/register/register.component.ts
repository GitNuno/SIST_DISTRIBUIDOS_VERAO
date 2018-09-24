import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // ORIGINAL !!
  // name: String;
  // username: String;
  // email: String;
  // password: String;

  // /AUTH/.6(min.02.00) > fiz diferente !!!
  registedUser: User;

  // De cada vez que queremos usar um serviço temos de o injetar no construtor
  // \AUTH\.6\(min.17.00)
  constructor(private validateSevice: ValidateService, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

 // /AUTH/.6(min.05.30) > fiz diferente !!!
  onRegisterSubmit(user: User) {
    // this.registedUser = user;
    // console.log(this.registedUser);
    //
    const userFieldsFilled = this.validateSevice.validateRegister(user);
    const userEmailValid = this.validateSevice.validateEmail(user.email);
    // Validação Campos obrigatórios
    if(!userFieldsFilled){
      console.log('Please fill in all fields');
      this._flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    // Validação Campo e-mail
    if(!userEmailValid){
      console.log('Please use a valid e-mail');
      this._flashMessagesService.show('Please use a valid e-mail', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    console.log(user);
  }

}
