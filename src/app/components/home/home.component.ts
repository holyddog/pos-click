import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    
    constructor(private router: Router) { }

    ngOnInit() {
    }

    open() {
        this.router.navigate(['/product', 1]);
    }
}
