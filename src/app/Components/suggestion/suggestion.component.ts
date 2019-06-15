import { Component, OnInit } from '@angular/core';
import {ControlExistant} from '../../models/ControlExistant';
import {NonConformite} from '../../models/NonConformite';
import {Suggestion} from '../../models/Suggestion';
import {ActivatedRoute} from '@angular/router';
import {ControlExistantService} from '../../services/control-existant.service';
import {NcService} from '../../services/nc.service';
import {SuggestionService} from '../../services/suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  ncs: NonConformite[];
  idx = '0';
  sugCorres:  Suggestion[];
  idselectedNc: number;


  constructor(private route: ActivatedRoute, private NcService:NcService,private SuggestionService:SuggestionService) { }

  ngOnInit() {
    this.getNcs()
  }


  getNcs(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.NcService.getAllNcs().subscribe(data => {
      this.ncs = data;
    });
  };


  getSug(id:number): void {
    this.SuggestionService.getsuggestionByNcId(id).subscribe(data => {
      this.sugCorres = data;
    });
  }

  off(): void {
    document.getElementById('overlay2').style.display = 'none';
  }

  ofF(): void {
    document.getElementById('overlay').style.display = 'none';
  }

  //interface add nc
  on(id:number) :void {
    this.idselectedNc=id;
    document.getElementById('overlay').style.display = 'block';
  }

  //interface lister suggestions
  onN(id:number) :void {
    this.getSug(id);
    document.getElementById('overlay2').style.display = 'block';
  }





}
