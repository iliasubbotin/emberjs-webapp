import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateMeetingController extends Controller {
    @service store;

    @action
    async saveMeeting(meeting) {
        try {
            let newMeeting = this.store.createRecord('meeting', meeting);
            await newMeeting.save();

            this.transitionToRoute('edit.meeting', newMeeting.id);
        }
        catch(e) {
            this.send('error', e);
        }
    }
}
