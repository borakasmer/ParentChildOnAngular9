import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataGridComponent implements OnInit {
  frameworkComponents: any;
  constructor() { }

  @Input() rowData: [];
  @Input() columnDefs: [];

  @Output() selectedData = new EventEmitter();

  selection = 'single';
  private gridApi;
  private gridColumnApi;

  ngOnInit() {
  }

  onSelectionChanged(params) {
    var selectedRows = this.gridApi.getSelectedRows();
    document.querySelector('#selectedRows').innerHTML =
      selectedRows.length === 1 ? selectedRows[0].Id : '';
    this.selectedData.emit(selectedRows[0]);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}