import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  isPrinting = false;
  constructor(private router: Router) { }

  printOrder(documentName: string, documentData: string[]) {
    this.router.navigate(['/',
  {outlets: {
    'print': ['print', documentName, documentData.join()]
  }}]);
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null}}]);
    });
  }

}
