import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'recursos', component: ResourcesPageComponent}
];

@NgModule({
  declarations: [
    ResourcesPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResourcesModule { }
