import { Routes, RouterModule } from '@angular/router';

import { ContestComponent } from './contest/contest.component';
import { LargeItemComponent } from './large-item/large-item.component';

const routes: Routes = [
	{path: '', redirectTo: 'contest/1/1', pathMatch : 'full'},
	{path: 'contest/:idContest/:idContester', component: ContestComponent},
	{path: 'largeitem/:idContest/:idContester/:idItem', component: LargeItemComponent}
];

export const routing = RouterModule.forRoot(routes);