import Route from '@ember/routing/route';

export default class CreateSpeakerRoute extends Route {
//    setupController(controller, model) {
//        super.setupController(...arguments);
//
//        controller.firstName = '';
//        controller.lastName = '';
//        controller.secName = '';
//    }

    model() {
        return {
            firstName: '',
            lastName: '',
            secName: ''
        }
    }
}
