import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'neumorphism';
  color = '#ba4e4e';
  buttonSize = '150';
  blurSize = '45';
  isFeature = false;
  private themeWrapper = document.querySelector('body');


  convertedText;
  showTip = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.color = '#a54747';
    this.changeColor();
    this.changeSize(this.buttonSize);
    this.changeBlueSize(this.blurSize);


    this.activatedRoute.queryParams.subscribe(res => {
      if (res) {
        this.isFeature = true;
      } else {
        this.isFeature = false;
      }
    });
  }

  changeColor() {
    this.global(this.color);
  }

  changeSize(size) {
    this.themeWrapper.style.setProperty('--buttonSize', size + 'px');
    this.themeWrapper.style.setProperty('--positionX', (0 + size/10) + 'px');
    this.themeWrapper.style.setProperty('--positionXOpposite', (0 - size/10) + 'px');
    this.themeWrapper.style.setProperty('--positionY', (0 + size/10) + 'px');
    this.themeWrapper.style.setProperty('--positionYOpposite', (0 - size/10) + 'px');
    this.themeWrapper.style.setProperty('--blurSize', ((0 + size/10) * 2) + 'px');
    this.blurSize = String((0 + size/10) * 2);

  }

  changeBlueSize(size) {
    this.themeWrapper.style.setProperty('--blurSize', size + 'px');
  }

  global(color) {
    this.themeWrapper.style.setProperty('--globalColor', color);
    this.themeWrapper.style.setProperty('--globalColorDark', this.ColorLuminance(color, -0.15));
    this.themeWrapper.style.setProperty('--globalColorLight', this.ColorLuminance(color, 0.15));
    this.themeWrapper.style.setProperty('--globalColorDarker', this.ColorLuminance(color, -0.10));
    this.themeWrapper.style.setProperty('--globalColorLighter', this.ColorLuminance(color, 0.07));
  }

  ColorLuminance(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }

    return rgb;
  }

  capitalize(text: string) {
    this.convertedText = text.toUpperCase();
  }
  clear(ref) {
    ref.value = '';
    this.convertedText = '';
  }
  copy() {
    this.showTip = true;
    setTimeout(res => {
      this.showTip = false;
    }, 1000);

    let value = this.convertedText;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
