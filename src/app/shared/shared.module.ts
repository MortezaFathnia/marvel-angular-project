
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarvelDetailsComponent } from './marvel-details/marvel-details.component';

@NgModule({
        declarations: [
        MarvelDetailsComponent],
        imports: [
                HttpClientModule,
                MaterialModule,
        ],
        exports: [
                MaterialModule,
        ],
        providers: [
                HttpClientModule
        ],
        entryComponents: [
        ]
})
export class SharedModule { }