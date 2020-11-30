import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateReportController extends Controller {
    @service store;

    @action
    async saveReport(report) {
//        try {
            let newReport = this.store.createRecord('report', report);
            await newReport.save();

            this.transitionToRoute('reports.index');
//        }
//        catch(e) {
//            this.send('error', e);
//        }
    }
}
