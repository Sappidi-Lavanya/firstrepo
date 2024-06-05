import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartshoping',
  templateUrl: './smartshoping.component.html',
  styleUrls: ['./smartshoping.component.css']
})
export class SmartshopingComponent implements OnInit {

  public productname: string = "";
  public price: number = 0;
  public rating: number = 0;
  public sno: number = 0;
  public fdelivery: boolean | undefined;
  public sum:number=0;

  public products: any[] = [
    { sno: 1, productname: "pen", price: 10, rating: 3, fdelivery: true },
    { sno: 2, productname: "phone", price: 100, rating: 2, fdelivery: false },
    { sno: 3, productname: "shirt", price: 400, rating: 4, fdelivery: true },
    { sno: 4, productname: "cap", price: 200, rating: 5, fdelivery: false},
    { sno: 5, productname: "mobile", price: 300, rating: 3, fdelivery: true },
    { sno: 6, productname: "remote", price: 400, rating: 3, fdelivery: true },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addcart(): void {
    let newProduct = {
      sno: this.products.length + 1,
      productname: this.productname,
      price: this.price,
      rating: this.rating,
      fdelivery: this.fdelivery
    };
    this.products.push(newProduct);
    this.clearForm();
  }

  clearForm(): void {
    this.productname = "";
    this.price = 0;
    this.rating = 0;
    this.fdelivery = undefined;
  }

  deleteProduct(i:number){
    this.products.splice(i,1);
  
  }
  FreeDelivery(): void {
    this.products = this.products.filter(product => product.fdelivery === true);
  }
  sorta_b(){
    this.products=this.products.sort((a,b)=>a.price-b.price);
console.log(this.products);
  }
  sortb_a(){
    this.products=this.products.sort((a,b)=>b.price-a.price);
console.log(this.products);
  }
ratinga_b(){
  this.products=this.products.sort((a,b)=>a.rating-b.rating);
console.log(this.products);

}
  
ratingb_a(){
  this.products=this.products.sort((a,b)=>b.rating-a.rating);
console.log(this.products);

}
// discount(){
//   this.products=this.products.map(prices=>prices/2);
//         console.log(this.products);
// }

discount() {
  this.products = this.products.map(product => {
    product.price = product.price / 2;  // Apply 50% discount
    return product;
  });
  console.log(this.products);
}


charges() {
  this.products = this.products.map((item) => {
    item.product.price += 50; // Add 50 to the product price
    return item; // Return the modified item
  });
  console.log(this.products);
}

total(){
  let totalprice=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert(totalprice);
}
cartitems(){
  let length:any=this.products.length;
  alert(length);
}
}