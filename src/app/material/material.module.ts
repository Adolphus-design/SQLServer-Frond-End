import { NgModule } from '@angular/core';
import { MatButtonModule,  } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule} from '@angular/material/tabs'
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';


const metarial = [
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatMenuModule,
  MatTabsModule,
  MatSelectModule,
  MatCardModule,
  MatDatepickerModule,
  MatRadioModule
]
@NgModule({
  exports: [metarial],
  imports: [metarial]
})
export class MaterialModule { }
