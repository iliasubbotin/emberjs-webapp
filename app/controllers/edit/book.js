import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';

export default class EditBookController extends Controller {
    @service dataService;

    @action
    async saveBook(e) {
        e.preventDefault();

        await this.dataService.changeBook(this.model);

        this.transitionToRoute('books');
    }
}
