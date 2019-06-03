import { Component, OnInit } from '@angular/core';
import {Mission} from '../../models/Mission';
import {Questionnaire} from '../../models/Questionnaire';
import {ActivatedRoute} from '@angular/router';
import {MissionService} from '../../services/mission.service';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {Question} from '../../models/Question';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  questionnaires: Questionnaire[];
  idx = '0';
  selectedQuest: Questionnaire;
  selectedQuestions: Question[];



  constructor(private route: ActivatedRoute, private questionnaireService: QuestionnaireService,private questionService:QuestionService) { }

  ngOnInit() {
    this.getQuestionnaires();
  }

  //interface detail quest
  onN(id:number) :void {
    this.getQuestions(id);
    document.getElementById('overlay2').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay2').style.display = 'none';
  }

  getQuestions(id: number): void {
    this.questionService.getQuestionsByQuestId(id).subscribe(data => {
      this.selectedQuestions = data;
    });
  }



  getQuestionnaires(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.questionnaireService.getQuestionnaires().subscribe(data => {
      this.questionnaires = data;
    });
  }



}
