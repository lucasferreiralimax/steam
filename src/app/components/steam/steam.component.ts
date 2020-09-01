import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.styl']
})
export class SteamComponent implements OnInit {

  minimize = false
  steam = true
  @Input() title: string;

  constructor() {}

  @HostListener('window:keyup', ['$event']) onMinimize(e) {
    if(e.keyCode === 27) {
      this.minimizeHandler()
    }
  }

  minimizeHandler () { this.minimize = !this.minimize }
  windowHandler () {
    this.steam = !this.steam
    this.minimize = false
    // this.cancelHandler()
  }

  ngOnInit(): void {
  }

}
