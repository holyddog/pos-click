import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './services/category.service';
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'POS Market';
    categories: any[];
    cartvalue = 0;
    categoryselect:any = {};
    constructor(private categoryService: CategoryService, private router: Router) {}

    ngOnInit() {
        this.checkCartvalue();
        this.categoryService.list()
            .then((data: any) => {
                if (data.result == "SUCCESS") {
                    this.categories = data.data.marketplaceCategories;
                }
            });
    }
    popup = true;
    menu() {
        if(this.popup){
            $('aside').addClass('active');
        }

        setTimeout(function () {
            $(document).bind('click', (e: any) => {
                if (!$(e.target).closest('aside').length) {
                    $(document).unbind('click');
                    $('aside').removeClass('active');
                }
            });
        }, 0);
        return;
    }
    backtohome(){
         this.router.navigate(['/']);
         this.checkCartvalue();
         $('aside').removeClass('active');
    }
    gotocart(){
         this.router.navigate(['/order']);
         this.checkCartvalue();
    }
    gotosearch(){
         this.router.navigate(['/search']);
         this.checkCartvalue();
    }    
    selectCatagory(c:any){
        //sessionStorage.setItem('catagory',c.code.toString());
        sessionStorage.setItem('catagory',JSON.stringify(c));
        this.categoryselect = c;
        this.router.navigate(['/homecategory']);
        $('aside').removeClass('active');
        //location.reload();

    }
    openCatagory(){
        //sessionStorage.setItem('catagory',c.code.toString());
        this.router.navigate(['/homecategory']);
        //location.reload();
    }
    openlogin(){
         this.router.navigate(['/login']);       
    }
    checkCartvalue(){
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        if(cart == null){
            this.cartvalue = 0;
        }
        else{
            this.cartvalue = cart.length;
        }
    }
    backtobefore(){
        window.history.back();
    }
}
