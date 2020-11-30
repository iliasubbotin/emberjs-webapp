import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class EditBookRoute extends Route {
    @service store;

    model({ id }) {
        return this.store.findRecord('book', id);
    }
    /*
    @service dataService;

    async model({id}) {
        return this.dataService.readBook(id);
    }
    */
}
