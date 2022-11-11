import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HomComponent } from './hom/hom.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot([ 
      { path: '', component:  HomComponent  },
      { path: 'register', component: RegisterComponent  },
      { path: 'child',component: ChildComponent},
      { path: '**', redirectTo: 'hom' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
