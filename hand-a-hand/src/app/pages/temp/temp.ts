import { Component } from "@angular/core";

@Component({
    template: `<div style="margin: auto;
    width: fit-content;
    position: relative;
    top: 275px;
    font-size: 32px;
    color: white;">Glass of water</div>
    <div style="margin: auto;
    width: fit-content;
    position: relative;
    top: 275px;
    font-size: 28px;
    color: white;">Explore humanity</div>
    <img width="60" height="60" [src]="imgpath">`
})
export class TempPage {
    imgpath = 'assets/images/glass2.jpg'
}