import { Component, OnInit } from '@angular/core';
import {Auditeur} from '../../models/Auditeur';
import {Client} from '../../models/Client';
import {AuditeurService} from '../../services/auditeur.service';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  clients: Client[]=[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  add(
    id: number,
    codePostal:string,
    dep: string,
    mail: string,
    pays: string,
    region: string,
    tel1: string,
  tel2:string,
  ville: string,
  activite: string,
    societe: string
  ): void {
    this.clientService.addClient({
      id,
        codePostal,
        dep,
        mail,
        pays,
        region,
        tel1,
        tel2,
        ville,
        activite,
        societe,

    } as Client)
      .subscribe(client => {
        this.clients.push(client);
      });
    this.reloadPage()
  }

  reloadPage() {
    window.location.reload();
  }



}
