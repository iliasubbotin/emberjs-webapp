import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { assign } from '@ember/polyfills';

export default class EditBookController extends Controller {
    @service store;
    @tracked tags;

    @action
    async saveBook(book) {
        try {
            console.log(book);
            assign(this.model, book);
            await this.model.save();

            this.transitionToRoute('books.index');
        }
        catch(e) {
            this.send('error', e);
        }
    }

    /*
    @service dataService;
    @tracked tags;

    @action
    async saveBook(book) {
        let bookToSave = Object.assign({}, book);
        bookToSave.id = this.model.id;

        try {
            await this.dataService.changeBook(bookToSave);

            this.transitionToRoute('books');
        }
        catch(e) {
            this.send('error', e);
        }
    }
    */
}
