import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Permissions } from './models/permissions';
import { User } from './models/user';

@Injectable()
export class StepGuardService implements CanActivate {

    constructor(private permissions: Permissions, private currentUser: User) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
      return this.permissions.canActivate(this.currentUser, route.params.id);
    }

}
