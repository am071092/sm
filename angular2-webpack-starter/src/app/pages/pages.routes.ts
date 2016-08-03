import { provideRouter, RouterConfig } from '@angular/router';
import {Pages} from './pages.component';

export const PagesRoutes:RouterConfig = [
    {
        path: 'pages',
        component: Pages
    }];