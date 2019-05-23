import { Component, OnInit } from '@angular/core';
import {Auditeur} from '../../models/Auditeur';
import {Client} from '../../models/Client';
import {ActivatedRoute} from '@angular/router';
import {AuditeurService} from '../../services/auditeur.service';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: Client[];
  idx = '0';
  selectedClient:Client;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  //interface d'ajout auditeur

  on(): void {
    document.getElementById('overlay').style.display = 'block';
  }
  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }




}
