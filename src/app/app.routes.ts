import { Routes } from '@angular/router';
import { DataTypesComponent } from './pages/components/data-types/data-types.component';
import { StringInterpolationComponent } from './pages/components/data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './pages/components/data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './pages/components/data-binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './pages/components/data-binding/two-way-binding/two-way-binding.component';
import { StyleBindingComponent } from './pages/components/data-binding/style-binding/style-binding.component';
import { ClassBindingComponent } from './pages/components/data-binding/class-binding/class-binding.component';

export const routes: Routes = [
  {
    path: 'data-types',
    component: DataTypesComponent,
  },
  {
    path: 'data-binding',
    children: [
      {
        path: 'string-interpolation',
        component: StringInterpolationComponent,
      },
      {
        path: 'property-binding',
        component: PropertyBindingComponent,
      },
      {
        path: 'event-binding',
        component: EventBindingComponent,
      },
      {
        path: 'two-way-binding',
        component: TwoWayBindingComponent,
      },
      {
        path: 'style-binding',
        component: StyleBindingComponent,
      },
      {
        path: 'class-binding',
        component: ClassBindingComponent,
      },
    ],
  },
];
