import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import { later } from '@ember/runloop';

export default class EditReportRoute extends Route {
    @service store;

    model({ id }) {
        return this.store.findRecord('report', id);
    }

}
