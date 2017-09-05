import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard.component';
import { EvaluationComponent } from './components/dashboard/evaluation.component';


import { DishesComponent } from './components/dishes.component';
import { NewDisheComponent } from './components/dishes/new-dishe.component';
import { EditDisheComponent } from './components/dishes/edit-dishe.component';

import { EditComponent } from './components/edit.component';

import { RestaurantService } from './services/restaurant.service';
import { DishesService } from './services/dishes.service';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'evaluation/:id', component: EvaluationComponent }
        ]
    },
    { path: 'dishes', component: DishesComponent,
        children: [
            { path: 'new', component: NewDisheComponent },
            { path: 'edit/:id', component: EditDisheComponent },
        ]
    },
    { path: 'edit', component: EditComponent },
  ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DashboardComponent,
        EvaluationComponent,
        DishesComponent,
        EditComponent,
        EditDisheComponent,
        NewDisheComponent
    ],
    providers: [
        RestaurantService,
        DishesService
    ]
})
export class RestaurantsModule {}