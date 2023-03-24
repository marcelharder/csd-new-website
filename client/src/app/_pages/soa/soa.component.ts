import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PresentationService } from 'src/app/_services/Presentation.service';

@Component({
  selector: 'app-soa',
  templateUrl: './soa.component.html',
  styleUrls: ['./soa.component.css']
})
export class SoaComponent implements OnInit {
  isFirstOpen = true;
  oneAtATime = true;
  constructor(private alertify: ToastrService, private pres: PresentationService) { }

  ngOnInit() {
  }
  showSoaPPT(){
    this.alertify.show("Show the SOA powerpoint, in another window.");
    this.pres.getPresenation("soa").subscribe((next)=>{
      window.open(next);
    })
  }
  showSoaDemo(){
    
    window.open("http://206.189.4.65:8086")
  
  }
  showTutorial(x: number){
    switch(x){
      case 1: window.open("https://docs.google.com/document/d/127ifGSodq6aJ0TlUikeGByjv8wKpgYmRTXVmsRiEqMg/edit?usp=share_link");break;
      case 2: window.open("https://docs.google.com/document/d/1vWHd47vurMdpIlmzEIG2RxPj300oX0_1gQp3e4TshJ0/edit?usp=share_link");break;
      case 3: window.open("https://docs.google.com/document/d/13M-dMYMg-ikCmtFarYyxLs3S2JZY4YhsAZ2n7dLk2FA/edit?usp=share_link");break;
      case 4: window.open("https://docs.google.com/document/d/1dHpsTpBH9RNKliCNt7kXsccqMeBKDbZNZoVrK2ghpM0/edit?usp=share_link");break;
      case 5: window.open("https://docs.google.com/document/d/1jkdBPY98mJhWnwNReY3LSEz0OkEv0_hogKPKCBP6LfY/edit?usp=share_link");break;
    }
   }
}
