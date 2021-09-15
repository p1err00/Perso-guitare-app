import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes = [
    {
      id: 1,
      name: "Do",
      posX: 1,
      posY: 0,
      frequence: 264,
      gammes: [
        "aze",
        "qsd",
        "wxc"
      ],
      accords:[
        "sdfsdf",
        "dcscqqc",
        "fjfj"
      ]
    },
    {
      id: 2,
      name: "Re",
      posX: 1,
      posY: 1,
      frequence: 297
    },
    {
      id: 3,
      name: "Mi",
      posX: 1,
      posY: 3,
      frequence: 330
    },
    {
      id: 4,
      name: "Fa",
      posX: 1,
      posY: 5,
      frequence: 352
    },
    {
      id: 5,
      name: "Sol",
      posX: 1,
      posY: 7,
      frequence: 396
    },
    {
      id: 6,
      name: "La",
      posX: 1,
      posY: 8,
      frequence: 440
    },
    {
      id: 7,
      name: "Si",
      posX: 1,
      posY: 10,
      frequence: 495
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  develop(id: HTMLElement){
    id.classList.toggle('hidden');
  }
}