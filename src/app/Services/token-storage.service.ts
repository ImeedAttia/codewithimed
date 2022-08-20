import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const ID_KEY = 'auth-id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY) !== null ? window.sessionStorage.getItem(TOKEN_KEY) : null  ;
  }

  public saveUser(id: any): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
  }

  public getUser(): any {
    const id = window.sessionStorage.getItem(ID_KEY);
    if (id) {
      return id;
    }

    return {};
  }
}
