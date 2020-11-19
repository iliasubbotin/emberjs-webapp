import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
//import {tracked} from '@glimmer/tracking';

export default class EditSpeakerController extends Controller {
    @service dataService;
//    @firstName = this.model.firsName;

    @action
    async saveSpeaker(e) {
        e.preventDefault();

//        console.log(this.model);
        await this.dataService.changeSpeaker(this.model);

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
