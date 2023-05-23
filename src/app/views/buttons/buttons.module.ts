import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ButtonsComponent } from './buttons/buttons.component';

import { ButtonsRoutingModule } from './buttons-routing.module';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule
  
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';
import { CalendrierComponent } from './calendrier/calendrier.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    CalendrierComponent,
    
    
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    NavbarModule
  ]
})
export class ButtonsModule {
}
