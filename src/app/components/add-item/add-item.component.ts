import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { ValidationService } from '../../services/validation.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: ''
  }

  constructor(private itemService: ItemsService, private validationService: ValidationService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(123456);
    console.log(this.item);
    if(this.item.title != '' && this.item.description != ''){
      this.itemService.addItem(this.item);
      this.item = { title: '', description: '' };
    }
  }

  // checkValidItem(){
  //   let errors = {};
  //   let { title, description } = this.item;
  //   if(!this.validationService.checkNotEmpty(title)) errors.title = 'Title is empty!';
  //   (!this.validationService.checkNotEmpty(description)) errors.description = 'Description is empty!';
  //   return { valid: this.validationService.checkNotEmpty(errors), errors };
  // }

}
