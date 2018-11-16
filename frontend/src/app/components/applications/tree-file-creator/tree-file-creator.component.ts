import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-file-creator',
  templateUrl: './tree-file-creator.component.html',
  styleUrls: ['./tree-file-creator.component.css']
})
export class TreeFileCreatorComponent implements OnInit {
  private fileList : any = [];
  private invalidFiles : any = [];
  constructor() { }

  onFilesChange(fileList : Array<File>){
    this.fileList = fileList;
    this.invalidFiles = fileList;
  }
  ngOnInit() {
  }

}
