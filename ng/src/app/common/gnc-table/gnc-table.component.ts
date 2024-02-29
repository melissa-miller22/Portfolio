import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gnc-table',
  templateUrl: './gnc-table.component.html',
  styleUrl: './gnc-table.component.scss'
})
export class GncTableComponent {

  public dataSource = new MatTableDataSource();

  @Input() tableColumns!: any[];
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  setTableDataSource(data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
  }

}
