import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  items: any[] = [];
  evenItems: any[] = [];
  oddItems: any[] = [];
  formData: any[] = [];
//  simpleform = FormGroup
  constructor(private productservice:ProductService,private fb:FormBuilder){

    
  }

  ngOnInit(){
    this.getObject();
    this.submitbutton()
  }

  simpleform = this.fb.group({
    id: [''],
    name: ['']
  })

 
  productlist:any[]= []

  



 getObject(){
  this.productservice.getdata().subscribe((res:any) =>{
    this.items = res

     console.log(this.items)

     this.items = res;
     this.evenItems = this.items.filter((res, index) => index % 2 === 1);
     this.oddItems = this.items.filter((res, index) => index % 2 !== 1);
   });
    
  
  }

 submitbutton(){
  // this.simpleform.value.id,
  // this.simpleform.value.name
  // console.log(this.simpleform.value)

  if (this.simpleform.valid) {
    const formData = this.simpleform.value;
    this.formData.push(formData);
    this.simpleform.reset();
  } else {
    alert('Please fill the form.');
  }
}

// editItem(item: { id: number, name: string }) {
  
//   console.log('Edit item:', item);
// }

// deleteItem(item: { id: number, name: string }) {
//   const index = this.formData.indexOf(item);
//   if (index !== -1) {
//     this.formData.splice(index, 1);
//   }
// }
 }


