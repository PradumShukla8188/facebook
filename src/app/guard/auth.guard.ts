import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('token')){
    window.location.href="/signUp";
    return false;
  }else{
    return true;
  }
    
    

};
