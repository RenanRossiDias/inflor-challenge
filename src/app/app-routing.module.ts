import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckinToolPageComponent } from './modules/pages/checkin-tool-page/checkin-tool-page.component';
import { CheckinComponent } from './modules/components/checkin/checkin.component';
import { CheckinAnalyticsComponent } from './modules/components/checkin-analytics/checkin-analytics.component';
import { CheckinWorkersComponent } from './modules/components/checkin-workers/checkin-workers.component';
import { WorkerRegisterComponent } from './modules/components/worker-register/worker-register.component';


const routes: Routes = [
  { path: '', redirectTo: '/ponto', pathMatch: 'full' },
  {
    path: 'ponto', component: CheckinToolPageComponent,
    children: [{
      path: 'registro',
      component: CheckinComponent
    },
    {
      path: 'relatorio',
      component: CheckinAnalyticsComponent
    },
    {
      path: 'colaboradores',
      component: CheckinWorkersComponent,
    },
    {
      path: 'colaboradores/cadastro',
      component: WorkerRegisterComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
