import {Component} from "@angular/core";
import {Store} from "../app/app.store";

@Component({
  selector: 'loader',
  styles: [`
  @-webkit-keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.loading-spinner {
  -webkit-animation-duration: 0.75s;
  -moz-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: rotate-forever;
  -moz-animation-name: rotate-forever;
  animation-name: rotate-forever;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  animation-timing-function: linear;
  height: 80px;
  width: 80px;
  border: 8px solid black;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
}

.loading-spinner {
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  margin: -15px 0 -15px;
}

`],
  template: `<div [ngClass]="{'loading-spinner': _store.state.app.loading}"></div>`
})


export class LoaderComponent {

  private _store: Store;

  constructor(store: Store) {
    this._store = store
  }
}