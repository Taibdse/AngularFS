import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(public itemService: ItemsService) { }

  ngOnInit() {
    console.log(123);
    this.itemService.getItems().subscribe(items => {
      // console.log(items);
      this.items = items;
    })
  }

  deleteItem($event, item: Item){
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem($event, item){
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }

}
