import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MeetingsRoute extends Route {
    @service store;

    async model({ search }) {
//        if (search) {
//            return this.store.query("meeting", { q: search });
//        }

        return this.store.findAll("meeting");
    }
}
