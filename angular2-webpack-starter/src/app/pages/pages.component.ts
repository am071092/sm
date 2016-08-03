import { Component } from '@angular/core';
import { PageTop } from '../theme/components';

@Component({
    selector: 'pages',
    directives: [PageTop],
    template: `
    <page-top></page-top>

    `
    

})

export class Pages {
    constructor() {
        
    }
}