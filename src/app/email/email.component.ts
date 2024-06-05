import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private _emailService:EmailService) {
    _emailService.getEmail().subscribe(
      (data:any)=>{
        this.mails=data;
      },
      (err:any)=>{
        alert('internal server error')
      }
    );
   }

  ngOnInit(): void {
  }
  public mails: any=[];

}
