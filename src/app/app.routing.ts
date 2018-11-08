import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

//Importar componentes
import { LoginComponent } from "../app/components/login/login.component";
import { MenuComponent } from "../app/components/menu/menu.component";
import { MapaDComponent } from "../app/components/mapa-d/mapa-d.component";
import { MapaMComponent } from "../app/components/mapa-m/mapa-m.component";
import { MapaSComponent } from "../app/components/mapa-s/mapa-s.component";
import { RegisterComponent } from "../app/components/register/register.component";

const appRoutes: Routes = [
    {path: '',component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'marca', component: MapaMComponent},
    {path: 'sitio', component: MapaSComponent},
    {path: 'direccion', component: MapaDComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
 
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);