import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ReportsController extends Controller {
    @service store;

    queryParams = ['search'];

    @tracked search = '';
    @tracked searchQuery = '';

    @action
    async deleteReport(id) {
        try {
            let report = this.store.peekRecord('report', id);
            report.deleteRecord();
//             speaker.isDeleted;
            await report.save();

            this.transitionToRoute('reports.index');
        } catch (e) {
            this.send("error", e);
        }
    }

    @action
    setSearchQuery(searchValue) {
        this.searchQuery = searchValue;
    }

    @action
    searchSpeacker(searchValue) {
        this.search = this.searchQuery;
    }
}
