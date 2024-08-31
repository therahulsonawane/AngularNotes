import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTypesComponent } from './pages/components/data-types/data-types.component';
import { StringInterpolationComponent } from './pages/components/data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './pages/components/data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './pages/components/data-binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './pages/components/data-binding/two-way-binding/two-way-binding.component';
import { StyleBindingComponent } from './pages/components/data-binding/style-binding/style-binding.component';
import { ClassBindingComponent } from './pages/components/data-binding/class-binding/class-binding.component';
import { NgClassDirectiveComponent } from './pages/components/directive/atttribute-directives/ng-class-directive/ng-class-directive.component';
import { NgStyleDirectiveComponent } from './pages/components/directive/atttribute-directives/ng-style-directive/ng-style-directive.component';
import { NgIfDirectiveComponent } from './pages/components/directive/structural-directives/ng-if-directive/ng-if-directive.component';
import { NgForDirectiveComponent } from './pages/components/directive/structural-directives/ng-for-directive/ng-for-directive.component';
import { NgSwitchDirectiveComponent } from './pages/components/directive/structural-directives/ng-switch-directive/ng-switch-directive.component';
import { IfElseControlFlowComponent } from './pages/components/control-flow/if-else-control-flow/if-else-control-flow.component';
import { ForControlFlowComponent } from './pages/components/control-flow/for-control-flow/for-control-flow.component';
import { SwitchControlFlowComponent } from './pages/components/control-flow/switch-control-flow/switch-control-flow.component';
import { ModelExampleComponent } from './pages/components/model-example/model-example.component';
import { OurTeamComponent } from './pages/components/parent-child-data-flow/our-team/our-team.component';
import { ProductListComponent } from './pages/components/parent-child-data-flow/product-list/product-list.component';
import { DeaultPipesComponent } from './pages/components/pipes/deault-pipes/deault-pipes.component';
import { CustomPipesComponent } from './pages/components/pipes/custom-pipes/custom-pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CustomPipesComponent,
    RouterOutlet,
    DeaultPipesComponent,
    DataTypesComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    NgClassDirectiveComponent,
    NgStyleDirectiveComponent,
    NgIfDirectiveComponent,
    NgForDirectiveComponent,
    NgSwitchDirectiveComponent,
    IfElseControlFlowComponent,
    ForControlFlowComponent,
    SwitchControlFlowComponent,
    ModelExampleComponent,
    OurTeamComponent,
    ProductListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
