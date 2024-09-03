// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { AddressDialogComponent } from './address-dialog/address-dialog.component';

// angular material
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  no: number;
  name: string;
  description: number;
  qty: number;
  price: number;
  amount: 50;
}

const ELEMENT_DATA: PeriodicElement[] = [{ no: 1, name: 'TV', description: 1, qty: 2, price: 50, amount: 50 }];

@Component({
  selector: 'app-invoice-create',
  standalone: true,
  imports: [SharedModule, AddressDialogComponent],
  templateUrl: './invoice-create.component.html',
  styleUrl: './invoice-create.component.scss'
})
export class InvoiceCreateComponent {
  // public props
  displayedColumns: string[] = ['no', 'name', 'description', 'qty', 'price', 'amount', 'action'];
  dataSource = ELEMENT_DATA;

  // constructor
  constructor(private dialog: MatDialog) {}

  // public method
  addressList() {
    this.dialog.open(AddressDialogComponent, {
      width: '700px'
    });
  }
}
