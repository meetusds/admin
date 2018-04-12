import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  private _list: any[] = [];
  @Input() appHref: any[] = [];

  @Input()
  set list(list: any[]) {
    this._list = list;
  }

  get list(): any[] { return this._list; }
}
