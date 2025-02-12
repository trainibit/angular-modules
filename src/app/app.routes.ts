import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { MonitoreoComponent } from './components/monitoreo/monitoreo.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{path: 'administracion', component: AdministracionComponent},
{path: 'sucursales', component: SucursalesComponent},
{path: 'monitoreo', component: MonitoreoComponent},
{path: 'contenido', component: ContenidoComponent},
];
