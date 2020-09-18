import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-marvel-details',
  templateUrl: './marvel-details.component.html',
  styleUrls: ['./marvel-details.component.scss']
})
export class MarvelDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MarvelDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

}
