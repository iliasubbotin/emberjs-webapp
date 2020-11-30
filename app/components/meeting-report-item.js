import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MeetingReportItemComponent extends Component {
    @tracked reportMeetingId = this.args.report.meetingId;

    @action
    checkMeeting(value) {
        const mid = !isNaN(this.args.meetingId)? parseInt(this.args.meetingId,10):0;
        this.args.report.meetingId = value? mid: 0;
    }

}