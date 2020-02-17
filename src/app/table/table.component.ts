import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  product: string;
  policyNumber: string;
  policyStartDate: string;
  policyDateInForce: string;
  policyCountryCurrency: string;
  policyStatus: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'},
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'},
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'},
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'},
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'},
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'},
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'},
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'},
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'},
  {product: 'LAP LUX', policyNumber: '020396902', policyStartDate: '18/11/2018', policyDateInForce: '29/12/2018', 
  policyCountryCurrency: 'Belgium/EUR', policyStatus: 'In Force'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['product', 'policyNumber', 'policyStartDate', 'policyDateInForce', 'policyCountryCurrency', 'policyStatus'];
  dataSource = ELEMENT_DATA;
  size = ELEMENT_DATA.length;

  constructor() { }

  ngOnInit() {
  }

}
