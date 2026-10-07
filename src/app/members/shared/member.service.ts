import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private storedCurrentMember$!: Observable<Member>;
  private storedCurrentMember?: Member;

  constructor(private http: HttpClient) {
  }

  fetchCurrentMember(): Observable<Member> {
    this.storedCurrentMember$ = this.http.get<Member>('digibooky/api/as/lending/members/current');
    return this.storedCurrentMember$;
  }

  get currentMember$(): Observable<Member> {
    return this.storedCurrentMember$;
  }

  get currentMember(): Member | undefined {
    return this.storedCurrentMember;
  }


  set currentMember(member: Member) {
    if (!this.storedCurrentMember) {
      this.storedCurrentMember = member;
    }
  }
}
