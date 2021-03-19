import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irANeuvo(){
    this.router.navigate(['nuevo']);
    console.log("i am going to Nuevo");

  }


}
