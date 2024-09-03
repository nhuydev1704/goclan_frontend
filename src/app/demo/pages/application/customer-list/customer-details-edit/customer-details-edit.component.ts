// angular import
import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';

@Component({
  selector: 'app-customer-details-edit',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './customer-details-edit.component.html',
  styleUrls: ['./customer-details-edit.component.scss']
})
export class CustomerDetailsEditComponent {
  // public props
  direction = 'ltr';

  // constructor
  constructor(
    public dialogRef: MatDialogRef<CustomerDetailsEditComponent>,
    private themeService: ThemeLayoutService
  ) {
    effect(() => {
      this.isRtlTheme(this.themeService.directionChange());
    });
  }

  //private method
  private isRtlTheme(direction: string) {
    this.direction = direction;
  }
}
