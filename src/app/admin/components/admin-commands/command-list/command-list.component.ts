import { Command } from './../../../../models/command';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {
  
  @Input() command: Command
  constructor() { }

  ngOnInit() {
  }

}
