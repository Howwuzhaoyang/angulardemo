import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  size: NzButtonSize = 'large';

  tags: {
    id: number,
    name: string
    url: string,
    describe: string,
  }[] = [
      { id: 0, name: '新年美妆低价巨献', url: '../../../assets/images/p(7).jpeg', describe: '低至125元' },
      { id: 1, name: '美特斯邦威羽绒服', url: '../../../assets/images/p(2).jpeg', describe: '15元抢' },
      { id: 2, name: '韩版中长款棉衣', url: '../../../assets/images/p(3).jpeg', describe: '157元抢' },
      { id: 3, name: '丝绒半身裙', url: '../../../assets/images/p(4).jpeg', describe: '527元抢' },
      { id: 4, name: '高领长款毛衣', url: '../../../assets/images/p(5).jpeg', describe: '127元抢' },
      { id: 5, name: '显瘦高筒靴', url: '../../../assets/images/p(6).jpeg', describe: '227元抢' },
      { id: 6, name: '加绒长款卫衣', url: '../../../assets/images/p(1).jpeg', describe: '137元抢' },

    ];
  constructor(public nzMessageService: NzMessageService) { }
  cancel(i: number): void {

    this.nzMessageService.info('取消删除');

  }

  confirm(i: number): void {
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
    const getYear = (n: number) => {
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


    console.log(getYear(6))
    if (i != 0) {
      this.tags.splice(i + 1, 1);
    }
    else {
      this.tags.splice(i, 1);
    }


    this.nzMessageService.info('删除成功');
  }


}
