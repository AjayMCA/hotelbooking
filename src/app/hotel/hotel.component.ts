import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotelData: any = [];
  searchQuery: string = '';
  page: number = 1;
  pageSize = 5;
  totalItems: number = this.hotelData.length;

  private URL = '../assets/hotel.json';

  constructor(private httpClient: HttpClient) {

  }
  //checkbox Type details
  checkboxList: any[] = [
    { id: 'C001', label: 'Apartment', select: false },
    { id: 'C002', label: 'Oyo', select: false },
    { id: 'C003', label: 'Hotel', select: false }
  ];

  ngOnInit(): void {
      this.fetchData();
  }

  fetchData() {
    this.httpClient.get(this.URL).subscribe(da => {
      this.hotelData = da;
    })
  }

  onChage(event: any) {
    const getCheckboxValue = event.target.value;
    const isChecked = event.target.checked;
    if(getCheckboxValue ==''){
      this.fetchData();
    }
    if(getCheckboxValue == 'Apartment'){
      this.hotelData = this.hotelData.filter((da:any) => da.hType == 'Apartment')
    }
    if(getCheckboxValue == 'Hotel'){
      this.hotelData = this.hotelData.filter((da:any) => da.hType == 'Hotel')
    }
    if(getCheckboxValue == 'Oyo'){
      this.hotelData = this.hotelData.filter((da:any) => da.hType == 'Oyo')
    }
  }

  productSearch() {
    if(this.searchQuery == ''){
      this.fetchData();
    }else{
      this.hotelData = this.hotelData.filter((item:any) => item.name.includes(this.searchQuery));
      // this.totalItems = this.hotelData.length;
       this.page = 1;
    }
  }

  
  //Booking
  booking() {
    alert("Work in progress! Will update soon.")
  }

}
