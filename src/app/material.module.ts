import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';

export const matmodules = [
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatButtonModule

]
@NgModule({
    imports: [...matmodules],
    exports:[...matmodules]
})
export class MaterialModule {}