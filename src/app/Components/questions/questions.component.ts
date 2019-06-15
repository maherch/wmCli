import {Component, Input, OnInit} from '@angular/core';
import {Auditeur} from '../../models/Auditeur';
import {Question} from '../../models/Question';
import {Questionnaire} from '../../models/Questionnaire';
import {ActivatedRoute} from '@angular/router';
import {AuditeurService} from '../../services/auditeur.service';
import {QuestionService} from '../../services/question.service';
import {QuestionnaireListComponent} from '../questionnaire-list/questionnaire-list.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  idx = '0';

  @Input() questionsDisplay: Question[];


  constructor(private questionService:QuestionService) { }

  ngOnInit() {
  }

  save(id:number,question:Question): void {
    this.questionService.updateQuestion(id, question).subscribe();
  }







}
