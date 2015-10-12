import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogService from '../../services/blog/blog.svc';

export default class BlogListViewControl extends BaseViewControl {
    templateString: string = require('./bloglist.vc.html');

    context: models.BlogListViewControlContext = {
        posts: []
    };
    
    constructor(public blogService: BlogService) {
        super();
        
    }
    
    initialize() {
        this.blogService.getPosts().then((results) => {
            this.context.posts = results;
        });
    }

    loaded() {
        
    }
}

register.viewControl('bloglist-vc', BlogListViewControl,
    [BlogService]
);
