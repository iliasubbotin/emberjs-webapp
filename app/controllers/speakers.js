import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SpeakersController extends Controller {
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
}
