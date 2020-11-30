import Route from '@ember/routing/route';

export default class CreateMeetingRoute extends Route {
    model() {
        return {
            "meetingDate": null,
            "reports": []
        };
    }
}
