import { Command } from './../../../models/command';
import { CommandService } from './../../../services/command.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-commands',
  templateUrl: './admin-commands.component.html',
  styleUrls: ['./admin-commands.component.css'],
  providers: [CommandService]
})
export class AdminCommandsComponent implements OnInit {

  commands: Command[]
  constructor(private service: CommandService) { }

  ngOnInit() {
    this.service.getAllCommands()
    .subscribe(data => {
      this.commands = data
    })
  }

}
