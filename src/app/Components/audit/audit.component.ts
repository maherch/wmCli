import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ControlExistantService} from '../../services/control-existant.service';
import {AuditService} from '../../services/audit.service';
import {NonConformite} from '../../models/NonConformite';
import {Audit} from '../../models/Audit';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  auditCorres:  Audit[];
  idmissionIn:number;
  private sub: any;

  constructor(private route: ActivatedRoute, private auditService:AuditService) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idmissionIn = +params['id'];
    this.getAudits(this.idmissionIn);   });
  }


  getAudits(id:number): void {
    this.auditService.getAuditByMissionId(id).subscribe(data => {
      this.auditCorres = data;
    });
  }


}
