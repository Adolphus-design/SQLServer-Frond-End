import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  disableSelect = new FormControl(false);

  ngOnInit(): void {
  }

  regForm = this.formBuilder.group({

    title: [''],
    fName: [''],
    sName: [''],
    tName: [''],
    surname: [''],
    initials: [''],
    maritalStatus: ['']


  })

}
