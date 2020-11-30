import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class MeetingFormComponent extends Component {
    @service store;
    @service moment;

    getIsoDate(date) {
        let formattedDate = this.moment.moment(date).toDate();
        return formattedDate.toISOString();
    }

    @tracked meetingDate = this.args.meetingDate;
    @tracked reports = this.store.query('report', { reportDate: this.getIsoDate(this.meetingDate) });

    @action
    async saveReport(e) {
        e.preventDefault();

//        const reportArray = this.reports.toArray();
//
//        reportArray.forEach((report) => {
//                report.save();
//        });

        this.args.onSubmit({
            meetingDate: this.meetingDate,
            reports: this.reports
        });
    }

    @action
    changeMeetingDate(date) {
        this.meetingDate = date;

        if (this.isEdit) {
            this.reports = this.store.query('report', { reportDate: this.getIsoDate(this.meetingDate), _expand: 'meeting' })
        }
    }

//    @action
//    getpromise(){
//        console.log('asdf');
//        return this.store.query('report', { reportDate_like: "2020-11-27" })
//    }

}