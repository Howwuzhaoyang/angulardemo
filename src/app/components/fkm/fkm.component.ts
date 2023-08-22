import { Component } from '@angular/core';

@Component({
  selector: 'app-fkm',
  templateUrl: './fkm.component.html',
  styleUrls: ['./fkm.component.css']
})
export class FKMComponent { 
  public getFkm=() =>{
    let fkmarr: Array<any> = []
    for (var i = 0; i < 7; i++) {
      if (i == 0 || i == 3) {
        fkmarr.push('$$$$$$$')
          console.log('$$$$$$$');
      }
      else {
        fkmarr.push('$      ')
          console.log('$      ');
      }
  }
  for (var n = 0; n < 7; n++) {
      if (n == 0 || n == 6) {
        fkmarr.push('#  # '.split('1')+" #")
          console.log('#   #');
      }
      else if (n == 1 || n == 5) {
        fkmarr.push('#  # ')
          console.log('#  # ');
      }
      else if (n == 2 || n == 4) {
        fkmarr.push('# #  ')
          console.log('# #  ');
      }
      else {
        fkmarr.push('#    ')
          console.log('#    ');
      }
  }
  for (var m = 0; m < 7; m++) {
      if (m == 0) {
        fkmarr.push('@              @')
          console.log('@              @');
      }
      else if (m == 1) {
        fkmarr.push('@  @         @  @')
          console.log('@  @         @  @');
      }
      else if (m == 2) {
        fkmarr.push('@    @     @    @')
          console.log('@    @     @    @');
      }
      else if (m == 3) {
        fkmarr.push('@       @       @')
          console.log('@       @       @');
      }
      else {
        fkmarr.push('@               @')
          console.log('@               @');
      }
  }
  return fkmarr;
  }
  public fkm:any[]=this.getFkm();
 
}
