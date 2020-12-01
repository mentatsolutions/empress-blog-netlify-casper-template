import EmberRouter from '@ember/routing/router';
import config from 'empress-blog-casper/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
   this.route('certs', { path:'/certs/:cert_id'})
});
});
