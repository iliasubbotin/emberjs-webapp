import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateSpeakerController extends Controller {
    @service store;

    @action
    async saveSpeaker(speaker) {
        try {
            let newSpeaker = this.store.createRecord('speaker', speaker);
            await newSpeaker.save();

            this.transitionToRoute('speakers.index');
        }
        catch(e) {
            this.send('error', e);
        }
    }

    /*
    @service dataService;

    @action
    async saveSpeaker(speacker) {
        try {
            await this.dataService.craeteSpeaker(speacker);

            this.transitionToRoute('speakers');
        }
        catch(e) {
            this.send('error', e);
            // this.transitionToRoute('error', e.message);
        }
    }

//    @action
//    changeFirsName(firstName) {
//        this.model.firstName = firstName;
//    }
    */
}

