import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogService extends BaseService {
	constructor() {
		super();
	}
	
	getPosts(): plat.async.IAjaxThenable<Array<models.IPost>> {
		
		return this.http.json<any>({
			method: 'GET',
			url: this.host + '/1/classes/Posts',
			headers: this.parseHeaders
		}).then((posts) => {
			return <Array<models.IPost>>posts.response.results;
		}, (error) => {
            throw error.response.message;
        });
	}
}

register.injectable('blog-svc', BlogService);
