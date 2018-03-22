import { User } from './user'

export class Permissions {
  canActivate(user: User, id: string): boolean {
    return true;
  }
}
