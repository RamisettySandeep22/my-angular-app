import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { SuperadminFormsComponent } from './superadmin-forms/superadmin-forms.component';

export const routes: Routes = [

{
    path: 'emps',component: EmpComponent
},

{
    path: "empForm",component:EmpFormComponent
},
{
    path: "superadmin",component:SuperadminComponent
},
{
    path: "superadmin-forms",component:SuperadminFormsComponent
}
];