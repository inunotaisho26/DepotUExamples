import {async, Utils} from 'platypus';

export default class BaseService {
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };

	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;

    host: string = 'https://api.parse.com';
    parseHeaders: any = {
        'X-Parse-Application-Id': '4Qyb5ODvmMR3WC88A4tOiLD4vcansVrA0ovlg3xn',
        'X-Parse-REST-API-Key': 'wOd5WMNu6sd4jLYYpzCpntGTKPybOLoT8Gian0Z9'
    };
}
