import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CreateorderService } from '../../services/createorder.service';

@Component({
    selector: 'createorder-component',
    templateUrl: 'createorder.component.html'
})
export class CreateorderComponent implements OnInit {

    products: any[];
    orderproducts: any[];
    sendedorder: any = {};
    errortext = ' ';
   

    constructor(private router: Router,private createorderService: CreateorderService) {}

    ngOnInit() {
        this.orderproducts = JSON.parse(sessionStorage.getItem('cart'));
        this.products = this.orderproducts;
        //console.log(this.products);
        if(this.products==null||this.products.length==0&&sessionStorage.getItem('cartorder')==null){
            this.router.navigate(['/']);
            //var listorder = JSON.parse(sessionStorage.getItem('cartorder'));
           /* this.createorderService.list(listorder)
            .then((data: any) => {
              if (data.result == "SUCCESS") {
                  this.priceorder = data.data;
              }
            });*/
        }
        
        
    }

    openproduct(id: any){
        this.router.navigate(['/product', id]);
    }
    open() {
        this.router.navigate(['/payment']);

    }
    billaddress = '';
    name = '';
    email = '';
    shipaddress = '';
    ok = false;
    surebuying = false;
    enterdetail(a:string,n:string,e:string,s:string){
        console.log(a+":"+n+":"+e+":"+s);
        if(a&&n&&e&&s){
            this.errortext = "Information is OK, please confirm";
            if(this.billaddress != a||this.name!= n||this.email != e||this.shipaddress != s){
                if(this.billaddress == ''&&this.name==''&&this.email==''&&this.shipaddress ==''){
                this.ok =true;
            }
            else{
                this.errortext = "Some information is change, please confirm again";
                this.ok = false;
            }
            }
            else{
                this.ok =true;
            }
            this.billaddress = a;
            this.name    = n;
            this.email   = e;
            this.shipaddress = s;
        }
        else{
            this.errortext = "Some space is blank, please enter all information";
           this.ok =false; 
           console.log("blank!!!");
        }
        
    }
    cancelsure(){
        this.surebuying = false;
    }

    makeOrder(a:string,n:string,e:string,s:string){
        console.log(a+":"+n+":"+e+":"+s+"1");
        this.enterdetail(a,n,e,s);
        if(this.ok){
             var orders = { 
            "data": { 
                "billingAddress": "address for test area for test, City for test, State for test, Thailand, 12345", 
                "currencyCode": "TH", 
                "customerEmailAddress": "bz@b.com", 
                "customerId": "PP000001", 
                "customerName": "bz", 
                "deviceId": "fe52fec2", 
                "isMediaOrder": "N", 
                "orderAttribute": [{}],
                "mediaTotalAmount": 0.0, 
                "shippingAddress": "address for test area for test, City for test, State for test, Thailand, 12345"
            }, 
            "locale": "th" 
        };
        var orederist = JSON.parse(sessionStorage.getItem('cartorder'));
        orders.data['orderList']=orederist.data['orderList'];
        orders.data['billingAddress']= this.billaddress;
        orders.data['customerEmailAddress'] = this.email;
        orders.data['customerName']= this.name;
        orders.data['shippingAddress']= this.shipaddress;
        sessionStorage.setItem('cartcreateorder',JSON.stringify(orders));
        console.log("complete");
        this.surebuying = true;
    }
    else{
        console.log("fail!!!");
         this.surebuying = false;
    }
       
}
    sendata(){
            //this.open();
            this.gotopay();
    }
    gotopay(){
        this.router.navigate(['/createpayment']);
    }
    reloadpage(){
        location.reload();
    }
    
   
}
