import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://www.googleapis.com/identitytoolkit/v3';
  private apiKey = 'AIzaSyCX7dXA3wDgS-d38ouGM_erMCpVKO2_JyI';

  // crear nuevo usuario
  crear = `${this.url}/relyingparty/signupNewUser?key=${this.apiKey}`;

  // logeuar usuario
  iniciarSesion = `${this.url}/relyingparty/verifyPassword?key=${this.apiKey}`;

  userToken = '';

  constructor(private http: HttpClient) {
    this.readToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel) {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(this.iniciarSesion, authData)
    .pipe(
      map(resp => {
        this.saveToken(resp['idToken'] );
        return resp;
      })
    );
  }

  register( usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(this.crear, authData)
      .pipe(
        map(resp => {
          this.saveToken(resp['idToken'] );
          return resp;
        })
      );
  }

  private saveToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  authenticated() {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }

  }

}

// NOTA: cuando esta el provideIn root, no es necesario importarlo en el app.module. Va a estar disponible el servicio en toda la app.
