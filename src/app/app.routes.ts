// import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestsComponent } from './contests/contests.component';
import { ContestComponent } from './contest/contest.component';
import { LargeItemComponent } from './large-item/large-item.component';

const routes: Routes = [
    {path: '', redirectTo: 'contests', pathMatch : 'full'},
    {path: 'contest/:idContest', redirectTo: 'contest/:idContest/1', pathMatch : 'full'},
    {path: 'contests', component: ContestsComponent},
    {path: 'contest/:idContest/:idContester', component: ContestComponent},
    {path: 'largeitem/:idContest/:idContester/:idItem', component: LargeItemComponent}
];

export const routing = RouterModule.forRoot(routes);
