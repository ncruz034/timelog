import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-file-creator',
  templateUrl: './tree-file-creator.component.html',
  styleUrls: ['./tree-file-creator.component.css']
})
export class TreeFileCreatorComponent implements OnInit {
  private fileList: any = [];
  private invalidFiles: any = [];
  constructor() { }
  onFilesInvalidEmiter(invalidFiles: Array<File>) {
    this.invalidFiles = invalidFiles;
  }
  onFilesChange(fileList: Array<File>) {
    this.fileList = fileList;
  }
  ngOnInit() {
  }
}
