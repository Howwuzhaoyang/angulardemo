import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  //写法一
    // var endyear:any = new Date().getFullYear();
    // var startyear:any = endyear - 5;
    // for (let i = 0; i < 5; i++) {
    //   const date:any = new Date(startyear += 1, 2, 0)
    //   const year:any = date.getFullYear();
    //   const month:any = date.getMonth() + 1; 
    //   const lastDay:any = new Date(year, month, 0).getDate();
    //   console.log(year + '-' + month + '-' + lastDay); 
    // }
    //写法2
    public getYear = (n: number) => {
      let yeararr: Array<any> = []
      let year = new Date().getFullYear() + 1
      for (let i = 0; i < n; i++) {
        year = year - 1
        const lastDay: number = new Date(year, 2, 0).getDate();
        const data: string = year + '-' + 2 + '-' + lastDay
        yeararr.push(data)
      }
      return yeararr
    }
   public getYears: any[]=this.getYear(6);

    

}
