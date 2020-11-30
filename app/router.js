import EmberRouter from '@ember/routing/router';
import config from 'emberjs-webapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('speakers', function() {});
  this.route('edit', function() {
    this.route('speaker', {path:'/speaker/:id'});
    this.route('book', {path:'/book/:id'});
    this.route('report', {path:'/report/:id'});
    this.route('meeting', {path:'/meeting/:id'});
  });
  this.route('create', function() {
    this.route('speaker');
    this.route('book');
    this.route('report');
    this.route('meeting');
  });
  this.route('books', function() {});
  this.route('loading');
  this.route('not-found', { path: "*path"} );
  this.route('meetings', function() {});
  this.route('reports', function() {});
  this.route('report');
});
