import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MeetingsController extends Controller {
    @service store;

    @service moment;

    getIsoDate(date) {
        let formattedDate = this.moment.moment(date).toDate();
        return formattedDate.toISOString();
    }

    @tracked speaker;
    @tracked book;
    @tracked MeetingDate;

    @action
    async deleteMeeting(id, reports) {
        try {
            const reportArray = reports.toArray();

            reportArray.forEach((report) => {
                report.meetingId = 0;
                report.save();
            });

            let meeting = this.store.peekRecord('meeting', id);
            meeting.deleteRecord();
            await meeting.save();

            this.transitionToRoute('meetings.index');
        } catch (e) {
            this.send("error", e);
        }
    }

    @action
    searchSpeaker(query) {
        return this.store.query('speaker', { q: query })
    }

    @action
    searchBook(query) {
        return this.store.query('book', { q: query })
    }

    @action
    serchReports() {
        console.log(this.speaker.id+"  "+this.book.id+"  "+this.getIsoDate(this.meetingDate));
    }


}
