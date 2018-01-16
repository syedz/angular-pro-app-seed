import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared module
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
];

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBY-u30MABt-8-auFOyU4cH6c8g13o4KgA",
    authDomain: "fitness-app-48641.firebaseapp.com",
    databaseURL: "https://fitness-app-48641.firebaseio.com",
    projectId: "fitness-app-48641",
    storageBucket: "fitness-app-48641.appspot.com",
    messagingSenderId: "819454564167"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {}