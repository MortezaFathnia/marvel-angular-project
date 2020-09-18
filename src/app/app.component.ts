import { Component, ViewChild } from '@angular/core';
import { Marvel } from './core/models/Marvel';
import { MarvelService } from './core/services/marvel.service';
import { map, startWith, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { MarvelDetailsComponent } from './shared/marvel-details/marvel-details.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel-app';
  myControl = new FormControl();
  filteredOptions: Observable<any>;
  filteredMarvels: Marvel[] = [];
  filteredUsers: Marvel[] = [];
  marvelForm: FormGroup;
  isLoading = false;
  pageEvent: PageEvent;
  datasource: null;
  pageIndex: number;
  pageSize: number;
  length: number;

  constructor(
    private marvelService: MarvelService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {

  }
  ngOnInit() {

    this.marvelForm = this.fb.group({
      userInput: null
    })

    this.myControl.valueChanges
      .pipe(
        startWith(''),
        switchMap(value => this._filter(value))
      )
      .subscribe(items => this.filteredMarvels = items);

  }

  private _filter(value: string): Observable<any[]> {
    console.log(111)
    return this.marvelService.getMarvel(0)
      .pipe(
        map(items =>
          items.results.filter(item => {
            return item.name.toLowerCase().includes(value.toString().toLowerCase())
          })
        )
      )
  }
  onSelectionChange(event) {
    this.filteredMarvels = this.filteredMarvels.filter(item => item.name == event.option.value.name)
  }

  displayFn(item: Marvel): string {
    return item && item.name ? item.name : '';
  }

  public getServerData(event?: PageEvent) {
    this.marvelService.getMarvel(event.pageIndex).subscribe(
      items => {
        this.filteredMarvels = items.results;
      }
    );
    return event;
  }

  showDetails(item: Marvel) {
    const dialogRef = this.dialog.open(MarvelDetailsComponent, {
      width: 'auto',
      data: item
    });
  }
}
