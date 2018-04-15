import { NgModule } from "@angular/core";
import * as mat from "@angular/material";

const modules = [
    mat.MatToolbarModule, 
    mat.MatListModule, 
    mat.MatCardModule, 
    mat.MatTabsModule, 
    mat.MatButtonModule,
    mat.MatDialogModule,
    mat.MatInputModule
];

@NgModule({
    imports: modules,
    exports: modules
})
export class AppMaterialModule { }