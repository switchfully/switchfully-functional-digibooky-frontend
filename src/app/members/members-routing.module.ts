import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';

const membersRoutes: Routes = [
  { path: 'members',  component: MemberComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(membersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MembersRoutingModule {}
