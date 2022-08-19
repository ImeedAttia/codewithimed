import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EntryService } from './../Services/entry.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(public authService: TokenStorageService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.getToken() === null) {
      console.log("Access Denied !!!");
      this.router.navigate(['/login'])

    }
    return true;
  }

}
