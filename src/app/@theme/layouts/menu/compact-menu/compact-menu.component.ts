// Angular import
import { Component, Input, effect } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

// project import
import { NavigationItem } from 'src/app/@theme/types/navigation';
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { MenuGroupCompactComponent } from './menu-group/menu-group.component';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';

@Component({
  selector: 'app-compact-menu',
  standalone: true,
  imports: [SharedModule, MenuGroupCompactComponent],
  templateUrl: './compact-menu.component.html',
  styleUrls: ['./compact-menu.component.scss']
})
export class CompactMenuComponent {
  // public props
  @Input() menus: NavigationItem[];
  direction = 'ltr';

  // Constructor
  constructor(
    private location: Location,
    private locationStrategy: LocationStrategy,
    private themeService: ThemeLayoutService
  ) {
    effect(() => {
      this.isRtlTheme(this.themeService.directionChange());
    });
  }

  // private methods
  private isRtlTheme(direction: string) {
    this.direction = direction;
  }

  // public method
  fireOutClick() {
    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger');
        last_parent.classList.add('active');
      }
    }
  }
}
