// angular import
import { Component } from '@angular/core';

// project import
import { BuyNowLinkService } from 'src/app/@theme/services/buy-now-link.service';
import { techData } from '../../data/tech-data';

// type
import { TechSection } from 'src/app/@theme/types/tech-data-type';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent {
  // public props
  navDataShow!: boolean;
  dropDownIcon: string = 'custom-arrowDown2';
  single: boolean;

  // constructor
  constructor(public productIdService: BuyNowLinkService) {
    if (this.productIdService.buyNowLink.includes('able-pro-angular-dashboard-template')) {
      this.single = true;
    } else {
      this.single = false;
    }
  }

  // public methods
  drpTechBlock: TechSection[] = techData;

  toggleIcon(): void {
    this.dropDownIcon = 'custom-arrowUp2';
  }

  resetIcon(): void {
    this.dropDownIcon = 'custom-arrowDown2';
  }
}
