import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private storedCurrentMember: Member;

  constructor(private http: HttpClient) {
  }

  getCurrentMember(): Observable<Member> {
    return this.http.get<Member>('digibooky/api/as/lending/members/current');
  }


  get currentMember(): Member {
    return this.storedCurrentMember;
  }

  set currentMember(value: Member) {
    this.storedCurrentMember = value;
  }
}
