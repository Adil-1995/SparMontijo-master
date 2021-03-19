import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neuvo',
  templateUrl: './neuvo.page.html',
  styleUrls: ['./neuvo.page.scss'],
})
export class NeuvoPage implements OnInit {
  nombreProducto: string;
  name:string;
  constructor() { }

  ngOnInit() {
  }
  getValues(){
   alert(this.name);

  }

}
