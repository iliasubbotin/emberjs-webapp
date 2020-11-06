import Application from 'emberjs-webapp/app';
import config from 'emberjs-webapp/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
