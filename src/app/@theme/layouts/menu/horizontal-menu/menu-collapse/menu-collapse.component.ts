// Angular import
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterModule } from '@angular/router';

// project import
import { NavigationItem } from 'src/app/@theme/types/navigation';
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu-collapse',
  standalone: true,
  imports: [SharedModule, CommonModule, MenuItemComponent, RouterModule],
  templateUrl: './menu-collapse.component.html',
  styleUrls: ['./menu-collapse.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', display: 'block' }),
        animate('250ms ease-in-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [animate('250ms ease-in-out', style({ transform: 'translateY(-100%)' }))])
    ])
  ]
})
export class MenuCollapseComponent {
  // public props

  // all Version Get Item(Component Name Take)
  @Input() item: NavigationItem;
  visible;

  // Constructor
  constructor() {
    this.visible = false;
  }

  // public method
  navCollapse(e: MouseEvent) {
    this.visible = !this.visible;

    let parent = e.target as HTMLElement;
    parent = (parent as HTMLElement).parentElement as HTMLElement;

    const sections = document.querySelectorAll('.coded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('coded-trigger');
      }
    }

    let first_parent = parent.parentElement;
    let pre_parent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
    if (first_parent?.classList.contains('coded-hasmenu')) {
      do {
        first_parent?.classList.add('coded-trigger');
        first_parent = (((first_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement)
          .parentElement as HTMLElement;
      } while (first_parent?.classList.contains('coded-hasmenu'));
    } else if (pre_parent.classList.contains('coded-submenu')) {
      do {
        pre_parent?.parentElement?.classList.add('coded-trigger');
        pre_parent = (((pre_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (pre_parent.classList.contains('coded-submenu'));
    }
    parent.classList.toggle('coded-trigger');
  }
}
