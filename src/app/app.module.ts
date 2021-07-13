/* Módulos */
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';/* importação de localização BR */
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';/* importação de localização BR */
/* Componentes */
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';

registerLocaleData(localePt, 'pt')/* importação de localização BR */

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent /* Aqui eu adicionei a classe que representa o componente nova-transferencia */,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },/* importação de localização BR */
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
