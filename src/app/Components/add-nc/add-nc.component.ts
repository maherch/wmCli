import {Component, Input, OnInit} from '@angular/core';
import {ControlExistant} from '../../models/ControlExistant';
import {NonConformite} from '../../models/NonConformite';
import {ActivatedRoute} from '@angular/router';
import {NcService} from '../../services/nc.service';
import {Mission} from '../../models/Mission';

@Component({
  selector: 'app-add-nc',
  templateUrl: './add-nc.component.html',
  styleUrls: ['./add-nc.component.scss']
})
export class AddNcComponent implements OnInit {

  @Input()idcontroleIn:number;
  ncs:NonConformite[]=[];
  idx = '0';


  constructor(private route: ActivatedRoute,private NcService:NcService) { }

  ngOnInit() {
  }

  add(id:number,
      idControle:number,
      description:string,
  ): void {
    this.NcService.addNc({
      id,
      idControle,
      description,
    } as NonConformite)
      .subscribe(nc => {
        this.ncs.push(nc);
      });
    this.reloadPage();

  }

  reloadPage() {
    window.location.reload();
  }


}
