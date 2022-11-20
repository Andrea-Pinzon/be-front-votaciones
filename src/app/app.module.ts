import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { CandidatosComponent } from './pages/candidatos/candidatos.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';

//aqui estamos importando las rutas desde dentro de pages para que las pueda usar el menu y el encabezado.
const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'mesas', component: MesasComponent},
  {path:'candidatos', component: CandidatosComponent},
  {path:'reportes', component: ReportesComponent},
  {path:'resultados', component: ResultadosComponent},
  {path:'login', component: LoginComponent},
  {path:'**' , redirectTo: '/' , pathMatch:'full'}
];

//declaramos los componentes
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MesasComponent,
    CandidatosComponent,
    ReportesComponent,
    ResultadosComponent,
    EncabezadoComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
