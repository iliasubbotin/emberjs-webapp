import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';
import { action } from "@ember/object";

export default class ReportsRoute extends Route {
    @service store;

    queryParams = {
        search: {
            refreshModel: true
        }
    };

    async model({ search }) {
        if (search) {
            return this.store.query("report", { q: search });
        }

        return this.store.findAll("report");
    }

    setupController(controller, model) {
        super.setupController(...arguments);
    }

    resetController(controller, isExiting) {
//        super.resetController(...arguments);

        if (isExiting) {
            controller.set('search', '');
        }
    }

    @action
    loading() {
        return false;
    }
}
