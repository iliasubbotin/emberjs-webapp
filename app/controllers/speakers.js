import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SpeakersController extends Controller {
    @service store;

    queryParams = ['search'];

    @tracked search = '';
    @tracked searchQuery = '';

    @action
    async deleteSpeaker(id) {
        try {
            let speaker = this.store.peekRecord('speaker', id);
            speaker.deleteRecord();
//             speaker.isDeleted;
            await speaker.save();

            this.transitionToRoute('speakers.index');
        } catch (e) {
            this.send("error", e);
        }
    }

    @action
    setSearchQuery(searchValue) {
        this.searchQuery = searchValue;
    }

    @action
    searchSpeacker(searchValue) {
        this.search = this.searchQuery;
    }

    /*
    @service dataService;

    queryParams = ['search'];

    @tracked search = '';
    @tracked searchQuery = '';
    @tracked isLoading;
    @tracked isError;

    @action
    async deleteSpeaker(id) {

        this.dataService.deleteSpeaker(id);
    }

    @action
    setSearchQuery(searchValue) {
        this.searchQuery = searchValue;
    }

    @action
    searchSpeacker(searchValue) {
        this.search = this.searchQuery;
    }
    */


}
