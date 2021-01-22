import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  gallery = [
    {
      image:'../../../assets/space1.jpg',
      subtitle:'It\' an X',
      title:'Bright',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi non ut similique, dolor, tenetur pariatur quos quod quis facilis magnam repudiandae corrupti eligendi, accusantium vel quibusdam saepe voluptatum amet?',
    },
    {
      image:'../../../assets/space2.jpg',
      subtitle:'Three Planets',
      title:'Planets',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi non ut similique, dolor, tenetur pariatur quos quod quis facilis magnam repudiandae corrupti eligendi, accusantium vel quibusdam saepe voluptatum amet?',
    },
    {
      image:'../../../assets/space3.jpg',
      subtitle:'It\'s a vegetable',
      title:'Mushrooms',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi non ut similique, dolor, tenetur pariatur quos quod quis facilis magnam repudiandae corrupti eligendi, accusantium vel quibusdam saepe voluptatum amet?',
    },
    {
      image:'../../../assets/space4.jpg',
      subtitle:'Pick a boo',
      title:'Pink&Blue',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi non ut similique, dolor, tenetur pariatur quos quod quis facilis magnam repudiandae corrupti eligendi, accusantium vel quibusdam saepe voluptatum amet?',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
