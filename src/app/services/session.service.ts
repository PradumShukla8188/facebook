import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // constructor() { }
  private sessionTimeout = 1800; // Session timeout in seconds
  private timer$: Observable<number>;
  private isSessionExpiredSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private sessionTimeLeftSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.sessionTimeout);

  constructor() {
    this.timer$ = timer(0, 1000); // Timer that emits every second
    this.startSessionTimer();
  }

  private startSessionTimer(): void {
    let count = 0;
    this.timer$
      .pipe(takeWhile(() => !this.isSessionExpiredSubject.getValue()))
      .subscribe(() => {
        count++;
        const timeLeft = this.sessionTimeout - count;
        this.sessionTimeLeftSubject.next(timeLeft);

        if (count === this.sessionTimeout) {
          this.isSessionExpiredSubject.next(true);
        }
      });
  }

  resetSessionTimer(): void {
    this.sessionTimeLeftSubject.next(this.sessionTimeout);
    this.isSessionExpiredSubject.next(false);
  }

  getSessionExpirationStatus(): Observable<boolean> {
    return this.isSessionExpiredSubject.asObservable();
  }

  getSessionTimeLeft(): Observable<number> {
    return this.sessionTimeLeftSubject.asObservable();
  }
}
