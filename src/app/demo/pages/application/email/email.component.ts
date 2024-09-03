// angular import
import { Component, OnInit, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { MailContentComponent } from './mail-content/mail-content.component';
import { MatDialog } from '@angular/material/dialog';

// third party
import { ComposeMailComponent } from './compose-mail/compose-mail.component';
import { MIN_WIDTH_1025PX, MAX_WIDTH_1024PX, MAX_WIDTH_1399PX, MIN_WIDTH_1400PX } from 'src/app/@theme/const';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule, SharedModule, MailContentComponent],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  // public props
  @ViewChild('email') email: MatDrawer;
  modeValue: MatDrawerMode = 'side';
  status = 'true';
  selectedTabIndex = 0;
  mailListHight = false;
  direction = 'ltr';

  // constructor
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private themeService: ThemeLayoutService
  ) {
    effect(() => {
      this.isRtlTheme(this.themeService.directionChange());
    });
  }

  // life cycle event
  ngOnInit() {
    this.breakpointObserver.observe([MIN_WIDTH_1025PX, MAX_WIDTH_1024PX]).subscribe((result) => {
      if (result.breakpoints[MAX_WIDTH_1024PX]) {
        this.modeValue = 'over';
      } else if (result.breakpoints[MIN_WIDTH_1025PX]) {
        this.modeValue = 'side';
      }
    });
    this.breakpointObserver.observe([MIN_WIDTH_1400PX, MAX_WIDTH_1399PX]).subscribe((result) => {
      if (result.breakpoints[MAX_WIDTH_1399PX]) {
        this.status = 'false';
      } else if (result.breakpoints[MIN_WIDTH_1400PX]) {
        this.status = 'true';
      }
    });
  }

  // private methods
  private isRtlTheme(direction: string) {
    this.direction = direction;
  }

  // public method
  tabChanged(index: number) {
    this.selectedTabIndex = index;
  }

  onClick() {
    this.mailListHight = !this.mailListHight;
  }

  composeMail() {
    this.dialog.open(ComposeMailComponent, {
      width: '500px'
    });
  }
}
