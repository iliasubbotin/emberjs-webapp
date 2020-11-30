import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import { assign } from '@ember/polyfills';

export default class EditMeetingController extends Controller {
    @action
    async saveMeeting(meeting) {
        try {
//            assign(this.model, meeting);
//            await this.model.save();

            const reportArray = meeting.reports.toArray();
//        await this.model.destroyRecord();

            reportArray.forEach((report) => {
                    report.save();
            });

            this.transitionToRoute('meetings.index');
        }
        catch(e) {
            this.send('error', e);
        }
    }
}
