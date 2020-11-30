import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { later } from '@ember/runloop';

export default class BooksRoute extends Route {
    @service store;

    queryParams = {
        search: {
            refreshModel: true
        },
        searchtag: {
            refreshModel: true
        }
    }

    async model({ search,  searchtag}) {
        if (search) {
            return this.store.query("book", { q: search });
        } else if(searchtag) {
            return this.store.query("book", { tags_like: searchtag });
        }

        return this.store.findAll("book");
    }

    setupController(controller, model) {
        super.setupController(...arguments);
    }

    resetController(controller, isExiting) {
        if (isExiting) {
            controller.set('search', '');
            controller.set('searchtag', '');
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
        },
        searchtag: {
            refreshModel: true
        }
    }

    async model({ search,  searchtag}) {
        let promise = new Promise((resolve, reject) => {
            later(() => {
                resolve(
                    this.dataService.readBooks(search,  searchtag)
                );
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

        //        return this.dataService.readBooks(search);
    }

    setupController(controller, model) {
        super.setupController(...arguments);

        controller.isError = false;
        controller.isLoading = true;
    }

    resetController(controller, isExiting) {
        if (isExiting) {
            controller.isError = false;
            controller.isLoading = false;
            this.lastPromise = false;
            controller.set('search', '');
            controller.set('searchtag', '');

        }
    }
    */
}
