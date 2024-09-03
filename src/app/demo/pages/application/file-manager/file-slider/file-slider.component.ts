// angular import
import { Component, OnInit, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { FileManagerLayoutService } from '../file-manager-layout.service';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';

@Component({
  selector: 'app-file-slider',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './file-slider.component.html',
  styleUrls: ['./file-slider.component.scss']
})
export class FileSliderComponent implements OnInit {
  // public props
  @ViewChild('file') file: MatDrawer;
  direction: string = 'ltr';

  // constructor
  constructor(
    private layoutService: FileManagerLayoutService,
    private themeService: ThemeLayoutService
  ) {
    effect(() => {
      this.isRtlTheme(this.themeService.directionChange());
    });
  }

  // life cycle hook
  ngOnInit() {
    this.layoutService.fileSlider.subscribe(() => {
      this.file.toggle();
    });
  }

  // private methods
  private isRtlTheme(direction: string) {
    this.direction = direction;
  }

  // public method
  fileClose() {
    this.layoutService.toggleFileSide();
  }

  user_file = [
    {
      img: 'assets/images/user/avatar-1.png',
      name: 'John Doe',
      email: 'John_Doe@ablepro.io'
    },
    {
      img: 'assets/images/user/avatar-5.jpg',
      name: 'Addie Bass',
      email: 'Addie_B@ablepro.io'
    },
    {
      img: 'assets/images/user/avatar-3.png',
      name: 'Alberta Robbins',
      email: 'Alberta@ablepro.io'
    },
    {
      img: 'assets/images/user/avatar-2.png',
      name: 'Agnes McGee',
      email: 'Agnes.Gee@ablepro.io'
    }
  ];
}
