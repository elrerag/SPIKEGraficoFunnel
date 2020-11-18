import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telerik',
  templateUrl: './telerik.component.html',
  styleUrls: ['./telerik.component.css'],
})
export class TelerikComponent implements OnInit {
  public enlace = `https://www.telerik.com/kendo-angular-ui/components/charts/series-types/funnel/`
  public model = [
    {
      stat: 'Impressions ',
      count: 434823,
      color: '#0e5a7e',
    },
    {
      stat: 'Clicks',
      count: 356854,
      color: '#166f99',
    },
    {
      stat: 'Unique Visitors',
      count: 280022,
      color: '#2185b4',
    },
    {
      stat: 'Downloads',
      count: 190374,
      color: '#319fd2',
    },
    {
      stat: 'Purchases',
      count: 120392,
      color: '#3eaee2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
