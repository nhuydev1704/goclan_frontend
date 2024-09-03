import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyNowLinkService {
  public buyNowLink: string;

  setBuyNowLink(urlValue: URLSearchParams): void {
    const singleValue = urlValue.get('isp');
    if (singleValue !== null && parseInt(singleValue) === 1) {
      this.buyNowLink = 'https://themeforest.net/item/able-pro-angular-dashboard-template/50607360';
    } else {
      this.buyNowLink = 'https://themeforest.net/item/able-pro-responsive-bootstrap-4-admin-template/19300403';
    }
  }
}
