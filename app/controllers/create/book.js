import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';

export default class CreateBookController extends Controller {
    @service dataService;

    @action
    async saveBook(e) {
        e.preventDefault();

        this.dataService.createBook(this.model);

        this.transitionToRoute('books');
    }
}
