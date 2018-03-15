import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { QuestviewComponent } from "./questview/questview.component";
import { ResultviewComponent } from "./resultview/resultview.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'assessement', component: QuestviewComponent },
  { path: 'results', component: ResultviewComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
  
}
