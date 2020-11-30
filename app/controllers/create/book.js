import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CreateBookController extends Controller {
    @service store;
    @tracked tags;

    @action
    async saveBook(book) {
        try {
            let newBook = this.store.createRecord('book', book);
            await newBook.save();

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
        try {
            await this.dataService.createBook(book);

            this.transitionToRoute('books');
        }
        catch(e) {
            this.send('error', e);
            // this.transitionToRoute('error', e.message);
        }
    }

//    @action
//    changeTags(newTags) {
//        this.model.tags = [...newTags];
//    }
    */
}
