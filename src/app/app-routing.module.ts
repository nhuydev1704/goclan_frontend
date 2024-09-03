// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// project import
import { AdminComponent } from './demo/layout/admin';
import { EmptyComponent } from './demo/layout/empty/empty.component';
import { GuestComponent } from './demo/layout/front/guest.component';
import { AuthGuard } from './@theme/helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./demo/pages/landing/landing.component').then((c) => c.LandingComponent)
      },
      {
        path: 'landing',
        loadComponent: () => import('./demo/pages/landing/landing.component').then((c) => c.LandingComponent)
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./demo/pages/contact-us/contact-us.component').then((c) => c.ContactUsComponent)
      },
      {
        path: 'components',
        loadChildren: () => import('src/app/demo/layout/component/component.module').then((m) => m.ComponentModule)
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./demo/pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'widget',
        loadChildren: () => import('./demo/pages/widget/widget.module').then((m) => m.WidgetModule)
      },
      {
        path: 'online-course',
        loadChildren: () => import('./demo/pages/admin-panel/online-courses/online-courses.module').then((m) => m.OnlineCoursesModule)
      },
      {
        path: 'membership',
        loadChildren: () => import('./demo/pages/admin-panel/membership/membership.module').then((m) => m.MembershipModule)
      },
      {
        path: 'helpdesk',
        loadChildren: () => import('./demo/pages/admin-panel/helpdesk/helpdesk.module').then((m) => m.HelpdeskModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./demo/pages/admin-panel/invoice/invoice.module').then((m) => m.InvoiceModule)
      },
      {
        path: 'application',
        loadChildren: () => import('./demo/pages/application/application.module').then((m) => m.ApplicationModule)
      },
      {
        path: 'apex-chart',
        loadComponent: () => import('./demo/pages/chart/apex-charts/apex-charts.component').then((c) => c.ApexChartsComponent)
      },
      {
        path: 'material-table',
        loadComponent: () => import('./demo/pages/material-table/material-table.component').then((c) => c.MaterialTableComponent)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/forms/forms.module').then((m) => m.FormsModule)
      },
      {
        path: 'price',
        loadChildren: () => import('./demo/pages/price/price-routing.module').then((m) => m.PriceRoutingModule)
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/pages/other/sample-page/sample-page.component').then((c) => c.SamplePageComponent)
      }
    ]
  },
  {
    path: '',
    component: EmptyComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'authentication-1',
        loadChildren: () => import('./demo/pages/auth/authentication-1/authentication-1.module').then((e) => e.Authentication1Module)
      },
      {
        path: 'authentication-2',
        loadChildren: () => import('./demo/pages/auth/authentication-2/authentication-2.module').then((e) => e.Authentication2Module)
      },
      {
        path: 'authentication-3',
        loadComponent: () =>
          import('./demo/pages/auth/authentication-3/authentication-three.component').then((c) => c.AuthenticationThreeComponent)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then((m) => m.MaintenanceModule)
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./demo/pages/maintenance/error/error.component').then((c) => c.ErrorComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
