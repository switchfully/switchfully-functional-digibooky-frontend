import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member/member.component';
import {MembersRoutingModule} from './members-routing.module';
import {MemberService} from './shared/member.service';
import {HttpClientModule} from '@angular/common/http';
import { MemberProfileComponent } from './member-profile/member-profile.component';

@NgModule({
  declarations: [
    MemberComponent,
    MemberProfileComponent
  ],
  providers: [
    MemberService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MembersRoutingModule
  ],
  exports: [
    MemberProfileComponent
  ]
})
export class MembersModule { }
