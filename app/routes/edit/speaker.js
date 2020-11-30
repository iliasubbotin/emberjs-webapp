import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class EditSpeakerRoute extends Route {
    @service store;

    model({ id }) {
        return this.store.findRecord('speaker', id);
    }

    /*
    @service dataService;

    async model({id}) {
        return this.dataService.readSpeaker(id);
    }
    */
}
