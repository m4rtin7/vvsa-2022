import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table' 
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@NgModule ({
    imports: [
      MatTableModule,
      MatIconModule,
      MatToolbarModule,
      MatMenuModule
    ],
    exports: [
      MatTableModule,
      MatIconModule,
      MatToolbarModule,
      MatMenuModule
    ]
  })
export class MaterialModules{}