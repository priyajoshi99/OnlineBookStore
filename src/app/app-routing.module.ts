import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from 'src/home/content/content.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: ContentComponent},
  {path: 'edit_info', component: EditInfoComponent},
  {path: 'deals', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
