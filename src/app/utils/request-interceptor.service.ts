import {HttpErrorResponse, HttpHandler, HttpRequest, HttpResponse,} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptorService {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('access_token')) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      });
    }
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpResponse) {
          if (error.status === 500) {
            this.router.navigateByUrl('/error/internal-server-error');
          } else if (error.status === 403) {
            this.router.navigateByUrl('/error/forbidden');
          }
        }
        return throwError(error);
      })
    );
  }

  errorHandler(error: HttpErrorResponse) {
    throwError(error);
  }
}