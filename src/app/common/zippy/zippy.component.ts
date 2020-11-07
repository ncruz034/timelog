import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent{
@Input('title') title : string;
@Input('data1') data1 : string;
@Input('data2') data2 : string;
@Input('data3') data3 : string;
@Input('data4') data4 : string;
isExpanded: boolean;

toggle(){
  this.isExpanded = !this.isExpanded;
}
}
