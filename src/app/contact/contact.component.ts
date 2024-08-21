import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
userName:string=''
userAge:string=''
userEmail:string=''
userPassword:string=''


  moveLabelName(eventInfo: KeyboardEvent): void {
    let userName = <HTMLElement>document.getElementById('userName');

    if (eventInfo.key != null) {
      userName.style.transform = 'translateY(-10px)';
    }
  }

  moveLabelAge(eventInfo: KeyboardEvent): void {
    let userAge = <HTMLElement>document.getElementById('userAge');
    if (eventInfo.key != null) {
      userAge.style.transform = 'translateY(-10px)';
    }
  }
  moveLabelEmail(eventInfo: KeyboardEvent): void {
    let userEmail = <HTMLElement>document.getElementById('userEmail');
    if (eventInfo.key != null) {
      userEmail.style.transform = 'translateY(-10px)';
    }
  }
  moveLabelPass(eventInfo: KeyboardEvent): void {
    let userPass = <HTMLElement>document.getElementById('userPass');
    if (eventInfo.key != null) {
      userPass.style.transform = 'translateY(-10px)';
    }
  }
}
