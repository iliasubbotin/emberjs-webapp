import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';

export default class CreateSpeakerController extends Controller {
    @service dataService;

    @action
    async saveBook(e) {
        e.preventDefault();

        this.dataService.craeteSpeaker(this.model);

        this.transitionToRoute('speakers');
    }

//    @action
//    changeFirsName(firstName) {
//        this.model.firstName = firstName;
//    }

//    @action
//    changeLastName(lastName) {
//        this.model.lastName = lastName;
//    }

//    @action
//    changeSecName(secName) {
//        this.model.secName = secName;
//    }
}

