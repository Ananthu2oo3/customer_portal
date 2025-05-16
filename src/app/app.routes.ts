// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'customer-login', loadComponent: () => import('./customer/customer.component').then(m => m.CustomerComponent) },
  { path: 'vendor-login', loadComponent: () => import('./vendor/vendor.component').then(m => m.VendorComponent) },
  { path: 'employee-login', loadComponent: () => import('./employee/employee.component').then(m => m.EmployeeComponent) },
];
