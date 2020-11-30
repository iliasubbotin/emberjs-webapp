import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';
import { action } from "@ember/object";

export default class SpeakersRoute extends Route {
    @service store;

    queryParams = {
        search: {
            refreshModel: true
        }
    };

    async model({ search }) {
        if (search) {
            return this.store.query("speaker", { q: search });
        }

        return this.store.findAll("speaker");
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

    /*
     @service dataService;

     queryParams = {
     search: {
     refreshModel: true
     }
     }

    async model({ search }) {
        let promise = new Promise((resolve, reject) => {
            later(() => {
                resolve(this.dataService.readSpeakers(search));
            }, 1000);
        }).
        then((data) => {
            this.controller.model = data;
        }).
        catch((e) => {
            this.send('error',e);
            this.controller.isLoading = true;
            this.controller.isError = true;
        }).
        finally(() => {
            if (promise === this.lastPromise) {
                this.controller.isLoading = false;
            }
        });

        this.lastPromise = promise;

        return {
            isLoading: true
        }

//        return this.store.findAll("speaker");
    }

    setupController(controller, model) {
//        super.setupController(...arguments);
        controller.isError = false;
        controller.isLoading = true;
    }

    resetController(controller, isExiting) {
//        super.resetController(...arguments);
        if (isExiting) {
            controller.isError = false;
            controller.isLoading = false;
            this.lastPromise = false;
            controller.set('search', '');
        }
    }

//    @action
//    loading() {
//        return false;
//    }
    */
}
