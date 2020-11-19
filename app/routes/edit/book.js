import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class EditBookRoute extends Route {
    @service dataService;

    async model({id}) {
        return this.dataService.readBook(id);
    }
}
