import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
      
  }
  search(sname:string){
    this.searchEvent.emit(sname);
  }
}
