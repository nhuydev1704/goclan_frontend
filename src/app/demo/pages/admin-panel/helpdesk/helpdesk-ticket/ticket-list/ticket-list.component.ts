// angular import
import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, effect } from '@angular/core';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

// third party
import { QuillModule } from 'ngx-quill';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [SharedModule, CommonModule, QuillModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.scss'
})
export class TicketListComponent implements AfterViewInit {
  // public props
  selectedView = 'large-view';
  direction = 'ltr';

  // constructor
  constructor(
    private themeService: ThemeLayoutService,
    private cdr: ChangeDetectorRef
  ) {
    effect(() => {
      this.isRtlTheme(this.themeService.directionChange());
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  // private methods
  private isRtlTheme(direction: string) {
    this.direction = direction;
  }

  // public methods
  ticketCards = [
    {
      name: 'John lui'
    },
    {
      type: 'open-ticket',
      name: 'John pal'
    },
    {
      type: 'close-ticket',
      name: 'John doe'
    }
  ];

  profiles = [
    {
      src: 'assets/images/user/avatar-5.jpg',
      uploadImage: false
    },
    {
      src: 'assets/images/user/avatar-4.jpg',
      uploadImage: true
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      uploadImage: false
    }
  ];

  img = [
    {
      image: 'assets/images/light-box/sl2.jpg'
    },
    {
      image: 'assets/images/light-box/sl5.jpg'
    },
    {
      image: 'assets/images/light-box/sl6.jpg'
    },
    {
      image: 'assets/images/light-box/sl1.jpg'
    }
  ];

  tickets = [
    {
      src: 'assets/images/admin/p1.jpg',
      name: 'Piaf able',
      background: 'bg-warn-50',
      number: '1',
      type: 'border-bottom p-b-15'
    },
    {
      src: 'assets/images/admin/p2.jpg',
      name: 'Pro able',
      type: 'border-bottom p-b-15 p-t-15'
    },
    {
      src: 'assets/images/admin/p3.jpg',
      name: 'CRM admin',
      background: 'bg-warn-50',
      number: '1',
      type: 'border-bottom p-b-15 p-t-15'
    },
    {
      src: 'assets/images/admin/p4.jpg',
      name: 'Alpha Pro',
      type: 'border-bottom p-b-15 p-t-15'
    },
    {
      src: 'assets/images/admin/p5.jpg',
      name: 'Carbon able',
      type: 'p-b-15'
    }
  ];

  agents = [
    {
      src: 'assets/images/user/avatar-5.jpg',
      name: 'Tom Cook',
      background: 'bg-warn-50',
      number: '1'
    },
    {
      src: 'assets/images/user/avatar-4.jpg',
      name: 'Brad Larry',
      background: 'bg-warn-50',
      number: '1'
    },
    {
      src: 'assets/images/user/avatar-3.png',
      name: 'John White'
    },
    {
      src: 'assets/images/user/avatar-2.png',
      name: 'Mark Jobs'
    },
    {
      src: 'assets/images/user/avatar-1.png',
      name: 'Able Pro'
    }
  ];
}
