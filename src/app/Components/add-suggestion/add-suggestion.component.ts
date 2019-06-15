import {Component, Input, OnInit} from '@angular/core';
import {NonConformite} from '../../models/NonConformite';
import {Suggestion} from '../../models/Suggestion';
import {ActivatedRoute} from '@angular/router';
import {NcService} from '../../services/nc.service';
import {SuggestionService} from '../../services/suggestion.service';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.scss']
})
export class AddSuggestionComponent implements OnInit {

  @Input()idNcIn:number;
  suggestions:Suggestion[]=[];
  idx = '0';


  constructor(private route: ActivatedRoute,private suggestionService:SuggestionService) { }

  ngOnInit() {
  }

  add(id:number,
      idNc:number,
      description:string,
  ): void {
    this.suggestionService.addSuggestion({
      id,
      idNc,
      description,
    } as Suggestion)
      .subscribe(nc => {
        this.suggestions.push(nc);
      });
    this.reloadPage();
  }


  reloadPage() {
    window.location.reload();
  }

}
