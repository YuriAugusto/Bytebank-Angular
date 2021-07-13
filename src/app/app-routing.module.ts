import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},//sempre que o caminho a ser acessado for vazio o usuário será redirecionado a página do extrato
  {path:'extrato', component: ExtratoComponent},//aqui eu defini que a rota extrato corresponde ao ExtratoComponent
  {path:'nova-transferencia', component: NovaTransferenciaComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule {}
