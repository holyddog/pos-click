import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DetailproductService } from '../../services/detailproduct.service';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'product-component',
    templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
     product: any = {};
     userId: any;
     quantity = 1;
     searchms ='';
     found = false;
    //constructor(private router: Router) { }

    constructor(private productService: DetailproductService, private router: Router,private activatedRoute: ActivatedRoute,private app:AppComponent) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
        this.userId = params['id'];
      });
        this.productService.list(this.userId)
          .then((data: any) => {
              if (data.result == "SUCCESS") {
                  this.product = data.data;
                  this.found = true;
              }
                else{
                     this.searchms ='not found';
                     this.found = false;
                }
            });
    }
    addpic(): any{
        if(this.product.images != undefined){
            if(this.product.images[0].imgPath==null){ 
                    this.product.images[0].imgPath="https://benetis.me/images/2017/02/Screen-Shot-2017-02-11-at-15.02.26.png"
            }
            return this.product.images[0].imgPath;
        }
         return "https://benetis.me/images/2017/02/Screen-Shot-2017-02-11-at-15.02.26.png";   

    }

    addproduct(){
        var b = [];
        if(sessionStorage.getItem('cart')!= null){
            b = JSON.parse(sessionStorage.getItem('cart'));
           
        }
         //b.push({"id": this.product.id});
         while(this.quantity>0){
             b.push(this.product);
             this.quantity--;
         }
        
         sessionStorage.setItem('cart',JSON.stringify(b));
         this.app.checkCartvalue();
         //this.router.navigate(['/']);
         window.history.back();
    }
    increaseproduct(){
        this.quantity++;
    }
    decreaseproduct(){
        if(this.quantity>1){
            this.quantity--;
        }
    }
    searchproduct(id:any){
        if(!isNaN(id)){
            this.router.navigate(['/product', id]);
            this.productService.list(id)
            .then((data: any) => {
              if (data.result == "SUCCESS") {
                  this.product = data.data;
                  this.found = true;
              }
            else{
                this.searchms ="not found";
            }
            });
        }
        if(id == "detail"){
            this.router.navigate(['/detailproduct', this.userId]);
        }
        
    }
}
