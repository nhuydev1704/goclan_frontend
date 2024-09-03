// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { DialogDataExampleDialogComponent } from 'src/app/@theme/components/modal-dialog/modal-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sc-gallery',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './sc-gallery.component.html',
  styleUrls: ['./sc-gallery.component.scss']
})
export class ScGalleryComponent {
  // constructor
  constructor(public dialog: MatDialog) {}

  // public method
  openDialog(path: string) {
    this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        imagePath: path
      },
      panelClass: 'custom-modalBox'
    });
  }
}
