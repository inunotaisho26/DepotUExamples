import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class FirstViewControl extends BaseViewControl {
    templateString: string = require('./firstviewcontrol.vc.html');

    context: any = {
        name: 'Matt Landers',
        customer: {
            id: 0
        },
        customers: [
            { id: 1,
            name: 'David'},
            { id: 2,
            name: 'Haley' }
        ]
    };
    
    loaded() {
        this.context.name = 'David Stapleton';
    }
    
    navigatedTo(parameters: any, query: any){
        var customerId = parameters.id;
        this.context.customer.id = customerId; 
    }
}

register.viewControl('firstviewcontrol-vc', FirstViewControl);
