import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        name: 'Matt Landers',
        customers: [
            { id: 1,
            name: 'David'},
            { id: 2,
            name: 'Haley' }
        ]
    };

    doSomething(){
        this.navigator.navigate('firstviewcontrol-vc', {parameters:{id: 100 } });
    }
    
}

register.viewControl('home-vc', HomeViewControl);
