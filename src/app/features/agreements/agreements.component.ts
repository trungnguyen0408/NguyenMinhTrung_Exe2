import { Component, OnInit } from '@angular/core';
import { ColDef, SideBarDef } from 'ag-grid-community';
import * as moment from 'moment';
import 'ag-grid-enterprise';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-agreements',
  templateUrl: './agreements.component.html',
  styleUrls: ['./agreements.component.scss'],
})
export class AgreementsComponent implements OnInit {

  //format to mm/dd/yyy
  dateFormatter(params: any) {
    return moment(params.value).format('MM/DD/yyyy');
  }

  colDefs: ColDef[] = [
    {
      headerName: 'Status',
      field: 'Status',
      filter: 'agTextColumnFilter',
      cellStyle: (params) => {
        if (params.value === 'Invalid') {
          return { color: 'red' };
        } else if (params.value === 'Published') {
          return { color: 'green' };
        } else {
          return { color: 'gray' };
        }
      },
      cellRenderer: (params:any) => {
        if(params.value === 'Invalid'){
          return params.value + ' <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68l-3.75-3.75 1.83-1.83a.996.996 0 011.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z"></path></svg>';
        }else if(params.value === 'Published'){
          return params.value + ' <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>' ;
        }else{
          return params.value + ' <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="8" y1="12" x2="8" y2="12.01"></line><line x1="12" y1="12" x2="12" y2="12.01"></line><line x1="16" y1="12" x2="16" y2="12.01"></line></svg>';
        }

      },
      width: 120, minWidth: 100, maxWidth: 200,

    },
    {
      headerName: 'Quote Number',
      field: 'QuoteNumber',
      filter: 'agTextColumnFilter'
    },
    {
      headerName: 'Agreement Name',
      field: 'AgreementName',
      filter: 'agTextColumnFilter',
      cellStyle: { color: 'rgb(109, 206, 210)' },
    },
    {
      headerName: 'Agreement Type',
      field: 'AgreementType',
      filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Distributor Name',
      field: 'DistributorName',
      filter: 'agTextColumnFilter',

    },
    {
      headerName: 'Effective Date',
      field: 'EffectiveDate',
      filter: 'agDateColumnFilter',
      valueFormatter: this.dateFormatter,

    },
    {
      headerName: 'Expiration Date',
      field: 'ExpirationDate',
      filter: 'agDateColumnFilter',
      valueFormatter: this.dateFormatter,

    },
    {
      headerName: 'Created Date',
      field: 'CreatedDate',
      filter: 'agDateColumnFilter',
      valueFormatter: this.dateFormatter,

    },
    {
      headerName: 'Days Until Expiration',
      field: 'DaysUntilExpiration',
      filter: 'agNumberColumnFilter',
    },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    floatingFilter: true,
    enableValue: true,
    enableRowGroup: true,
    enablePivot: true,
    resizable:true,
    width: 180, minWidth: 100, maxWidth: 250,

  };


  //sideBar colums
  public sideBar: SideBarDef | string | string[] | boolean | null = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivots: false,
          suppressPivotMode: false,
          suppressColumnFilter: false,
          suppressColumnSelectAll: false,
          suppressColumnExpandAll: true,
        },
      },
    ],
    defaultToolPanel: 'columns',
  };

  constructor() {}

  //Data agreements
  rowData = [
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2020, 12, 6),
      ExpirationDate: new Date(2019, 6, 2),
      CreatedDate: new Date(2021, 4, 6),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Published',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2020, 12, 6),
      ExpirationDate: new Date(2019, 6, 2),
      CreatedDate: new Date(2021, 4, 6),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2020, 12, 6),
      ExpirationDate: new Date(2019, 6, 2),
      CreatedDate: new Date(2021, 4, 6),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2020, 12, 6),
      ExpirationDate: new Date(2019, 6, 2),
      CreatedDate: new Date(2021, 4, 6),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Published',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Published',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Published',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Published',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Published',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2020, 12, 6),
      ExpirationDate: new Date(2019, 6, 2),
      CreatedDate: new Date(2021, 4, 6),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Invalid',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2020, 12, 6),
      ExpirationDate: new Date(2019, 6, 2),
      CreatedDate: new Date(2021, 4, 6),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Published',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Published',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Published',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2022, 8, 6),
      ExpirationDate: new Date(2022, 8, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
    {
      Status: 'Pending',
      QuoteNumber: '0277A' + this.getRandomInt(99),
      AgreementName: 'HP PACK AIR INC ' + this.getRandomInt(99),
      AgreementType: 'SPA',
      DistributorName: 'Werner',
      EffectiveDate: new Date(2019, 5, 6),
      ExpirationDate: new Date(2020, 3, 7),
      CreatedDate: new Date(2022, 7, 12),
      DaysUntilExpiration: this.getRandomInt(999),
    },
  ];

  //perfect scrollbar
  onGridReady(params: any,gridContainer:any) {
    let array=[ ".ag-body-viewport"," .ag-body-horizontal-scroll-viewport"]
    array.forEach(element => {
           let container = <HTMLElement>  gridContainer.querySelector(element)
           if(container){
             const ps = new PerfectScrollbar(container);
             ps.update();
           }
         });
      }

  //random number 0 > max
  public getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {}
}
