import { Component, OnInit } from '@angular/core';
import {MemberService} from '../shared/member.service';
import {Member} from '../shared/member.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {

  currentMember$: Observable<Member>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.currentMember$ = this.memberService.fetchCurrentMember();
  }

}
