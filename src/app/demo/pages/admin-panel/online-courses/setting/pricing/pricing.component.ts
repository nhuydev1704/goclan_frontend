// angular import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  // public props
  isChecked = true;
  togglePrice!: boolean;
  pricingPlans = [
    {
      name: 'Basic',
      services: '03',
      status: '',
      originalPrice: 729,
      discountedPrice: 69,
      button_type: true,
      features: [
        { label: 'One End Product', enabled: false },
        { label: 'No attribution required', enabled: false },
        { label: 'TypeScript', enabled: false },
        { label: 'Figma Design Resources', enabled: true },
        { label: 'Create Multiple Products', enabled: true },
        { label: 'Create a SaaS Project', enabled: true },
        { label: 'Resale Product', enabled: true },
        { label: 'Separate sale of our UI Elements?', enabled: true }
      ]
    },
    {
      name: 'Standard',
      services: '05',
      status: 'active',
      originalPrice: 1449,
      discountedPrice: 129,
      button_type: false,
      class: 'most-useable',
      margin: 'm-t-15',
      features: [
        { label: 'One End Product', enabled: false },
        { label: 'No attribution required', enabled: false },
        { label: 'TypeScript', enabled: false },
        { label: 'Figma Design Resources', enabled: false },
        { label: 'Create Multiple Products', enabled: false },
        { label: 'Create a SaaS Project', enabled: true },
        { label: 'Resale Product', enabled: true },
        { label: 'Separate sale of our UI Elements?', enabled: true }
      ]
    },
    {
      name: 'Premium',
      services: '08',
      status: '',
      originalPrice: 7089,
      discountedPrice: 599,
      button_type: true,
      features: [
        { label: 'One End Product', enabled: false },
        { label: 'No attribution required', enabled: false },
        { label: 'TypeScript', enabled: false },
        { label: 'Figma Design Resources', enabled: false },
        { label: 'Create Multiple Products', enabled: false },
        { label: 'Create a SaaS Project', enabled: false },
        { label: 'Resale Product', enabled: false },
        { label: 'Separate sale of our UI Elements?', enabled: false }
      ]
    }
  ];

  // public method
  toggleChecked(isChecked: boolean) {
    this.togglePrice = isChecked;
  }
}
