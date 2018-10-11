import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  checkNotEmpty(val){
    if(val == null || val == undefined) return false;
    if(typeof val == 'string' && val.trim() == '') return false;
    if(typeof val == 'object' && Object.keys(val).length == 0) return false;
    return true;
  }
}
