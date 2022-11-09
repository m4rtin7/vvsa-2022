import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table' 
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from "@angular/forms";

@NgModule ({
    imports: [
      MatTableModule,
      MatIconModule,
      MatToolbarModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule
    ],
    exports: [
      MatTableModule,
      MatIconModule,
      MatToolbarModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule
    ]
  })
export class MaterialModules{}