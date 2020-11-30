import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import { assign } from '@ember/polyfills';

export default class EditReportController extends Controller {
    @service store;

    @action
    async saveReport(report) {
        try {
            assign(this.model, report);
            await this.model.save();

            this.transitionToRoute('reports.index');
        }
        catch(e) {
            this.send('error', e);
        }
    }
}
