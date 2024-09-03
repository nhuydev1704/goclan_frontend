// angular import
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

import { ProductService } from 'src/app/demo/pages/application/e-commerce/product.service';
import { Products } from 'src/app/@theme/types/product';
import { StarRatingComponent } from 'src/app/@theme/components/star-rating/star-rating.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, SharedModule, StarRatingComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ProductListComponent implements AfterViewInit, OnInit {
  // public props
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<Products>;
  selection: SelectionModel<Products>;
  columnsToDisplay = ['select', 'id', 'details', 'categories', 'price', 'qty', 'status', 'actions'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay];

  // constructor
  constructor(private productService: ProductService) {
    this.dataSource = new MatTableDataSource<Products>([]);
    this.selection = new SelectionModel<Products>(true, []);
  }

  // life cycle event
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.productService.getProduct();
    this.productService.product.subscribe((data) => {
      this.dataSource.data = data; // Update dataSource's data
    });
  }

  // public method
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Products): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row `;
  }
}
