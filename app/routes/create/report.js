import Route from '@ember/routing/route';

export default class CreateReportRoute extends Route {
    model() {
        return {
            "reportDate": null,
            "bookRequest": "",
            "speaker": null,
            "book": null
        };
    }
}
