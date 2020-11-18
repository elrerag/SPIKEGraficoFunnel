import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devexpress',
  templateUrl: './devexpress.component.html',
  styleUrls: ['./devexpress.component.css'],
})
export class DevexpressComponent implements OnInit {
  // datos para actualizar la información del gráfico
  public data: itemInfo[] = [
    { argument: 'Visited the Website', value: 9152 },
    { argument: 'Downloaded a Trial', value: 6879 },
    { argument: 'Contacted Support', value: 5121 },
    { argument: 'Subscribed', value: 2224 },
    { argument: 'Renewed', value: 1670 },
  ];

  constructor() {}

  ngOnInit(): void {}
  customizeText(arg: any) {
    return (
      "<span style='font-size: 28px'>" +
      arg.percentText +
      '</span><br/>' +
      arg.item.argument
    );
  }
}
