import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component'
 
const routes: Routes = [
{ path: 'person', redirectTo:'person/index', pathMatch: 'full'},
{ path: 'person/index', component: IndexComponent },
{ path: 'person/create', component: CreateComponent },
{ path: 'person/edit/:idPerson', component:EditComponent },
{ path: 'person/login', component:LoginComponent},
{ path: 'person/createUser', component:CrearUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
