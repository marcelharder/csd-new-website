import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
    isExpanded = false;
    model: any = {};

   
    

    constructor(private router: Router) { }

   
    ngOnInit() {
       
    }

    
    

    

}