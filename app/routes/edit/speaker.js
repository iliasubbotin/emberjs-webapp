import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class EditSpeakerRoute extends Route {
    @service dataService;
    // нужно попробовать прокинуть пеерменную и в   setupController менять ее

    async model({id}) {
        return this.dataService.readSpeaker(id);
    }

//    setupController(controller, model) {
//        super.setupController(...arguments);
//
//        controller.isLoading = true;
//    }
}
