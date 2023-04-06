import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PresentationService } from 'src/app/_services/Presentation.service';

@Component({
  selector: 'app-ovi',
  templateUrl: './ovi.component.html',
  styleUrls: ['./ovi.component.css']
})
export class OviComponent implements OnInit {
  isFirstOpen = true;
  oneAtATime = true;
  constructor(private alertify: ToastrService, private pres: PresentationService) { }

  ngOnInit() {
  }
  
  showOviPPT(){
    this.alertify.show("Show the OVI powerpoint, in another window.");
    this.pres.getPresenation("ovi").subscribe((next)=>{
      window.open(next);
    })
  }
  showOviDemo(){
    window.open("https://ovi.surgical-outcomes.nl")
  }
 
}
