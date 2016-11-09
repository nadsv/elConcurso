import { Routes, RouterModule } from '@angular/router';

import { ContestComponent } from './contest/contest.component';
import { LargeItemComponent } from './large-item/large-item.component';

const routes: Routes = [
	{path: '', redirectTo: 'contest/1', pathMatch : 'full'},
	{path: 'contest/:id', component: ContestComponent},
	{path: 'largeitem', component: LargeItemComponent}
];

export const routing = RouterModule.forRoot(routes);