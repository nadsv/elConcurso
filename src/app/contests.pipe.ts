import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contestsNameFilter'
})
export class ContestsNameFilter implements PipeTransform {
  transform(contests: any[], arg: string): any {
    return contests.filter(contest => { return contest.name.toLowerCase().includes(arg.toLowerCase()) });
  }
}