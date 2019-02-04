import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Member} from '../shared/member.model';
import {MemberService} from '../shared/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member$: Observable<Member>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.member$ = this.memberService.getCurrentMember();
  }

  storeMember(member: Member): void {
    this.memberService.currentMember = member;
  }
}
