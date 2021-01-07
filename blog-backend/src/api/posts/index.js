import Router from 'koa-router';
import checkLoggedIn from '../../lib/chekcLoggedIn.js';
import * as postsCtrl from './posts.ctrl.js';

export const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostsById, post.routes());

export default posts;
