import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import { assign } from '@ember/polyfills';

export default class EditSpeakerController extends Controller {
    @service store;

    @action
    async saveSpeaker(speacker) {
        try {
            assign(this.model, speacker);
            await this.model.save();

            this.transitionToRoute('speakers.index');

//            let speaker = this.store.createRecord('speaker', data);
//
//            speaker.save();

//            this.transitionToRoute('speakers.index');
        }
        catch(e) {
            this.send('error', e);
        }
    }

    /*
    @service dataService;

    @action
    async saveSpeaker(speacker) {
        let speakerToSave = Object.assign({}, speacker);
        speakerToSave.id = this.model.id;

        try {
            await this.dataService.changeSpeaker(speakerToSave);

            this.transitionToRoute('speakers');
        }
        catch(e) {
            this.send('error', e);
        }
    }
    */

}
