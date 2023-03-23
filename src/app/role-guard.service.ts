import { CanActivate, Router,} from '@angular/router'
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class RoleGuard implements CanActivate {
    canActivate() {
        let Role = localStorage.getItem("role");
        if(Role == "admin"){
            return false;
        }
        alert("You don't have admin rights")
        return true;
    }
}