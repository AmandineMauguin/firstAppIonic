import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private storage:Storage) { }

  monTableau=[];
  maVariable='Blblblblblbl';

  async getStorage(){
    const data = await this.storage.get('monTableau');
console.log('Données du storage', data);
if (data) this.monTableau = data;
  };
  ngOnInit() {
    this.getStorage();
  };

  afficheVar(){
    this.monTableau.push(this.maVariable);
    console.log(this.monTableau);
    this.storage.set('monTableau', this.monTableau);
  };

  supprItem(i){
    this.monTableau.splice(i,1);
  };


}
