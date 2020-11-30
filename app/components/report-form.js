import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
//import { next } from '@ember/runloop';

export default class ReportFormComponent extends Component {
    @service store;

    @tracked reportDate = this.args.reportDate;
    @tracked bookRequest = this.args.bookRequest;
    @tracked speaker = this.args.speaker;
    @tracked book = this.args.book;
    @tracked meeting = this.args.meeting||0;

    @action
    async saveReport(e) {
        e.preventDefault();

//        console.log({
//            reportDate: this.reportDate,
//            bookRequest: this.bookRequest,
//            speaker: this.speaker,
//            book: this.book,
//            meeting: null
//        });
//        return;

        this.args.onSubmit({
            reportDate: this.reportDate,
            bookRequest: this.bookRequest,
            speaker: this.speaker,
            book: this.book,
            meetingId: this.meeting
        });
    }

    @action
    searchSpeaker(query) {
        return this.store.query('speaker', { q: query })
    }

    @action
    searchBook(query) {
        return this.store.query('book', { q: query })
    }
}