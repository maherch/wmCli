import {Component, Input, OnInit} from '@angular/core';
import {NonConformite} from '../../models/NonConformite';
import {Suggestion} from '../../models/Suggestion';

@Component({
  selector: 'app-liste-suggestion',
  templateUrl: './liste-suggestion.component.html',
  styleUrls: ['./liste-suggestion.component.scss']
})
export class ListeSuggestionComponent implements OnInit {

  @Input() SugDisplay:Suggestion[];


  constructor() { }

  ngOnInit() {
  }

}
