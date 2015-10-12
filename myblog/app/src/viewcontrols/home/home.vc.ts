import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};
    
    loaded() {
        
    }
    canNavigteTo() {

    }
}

register.viewControl('home-vc', HomeViewControl);
