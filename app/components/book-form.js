import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { next } from '@ember/runloop';

export default class BookFormComponent extends Component {
    @tracked _bookName;
    @tracked tags = this.args.tags;

    bookNameArgsPrevValue;

    get bookName() {
        if (this.bookNameArgsPrevValue !== this.args.bookName) {
            this.bookNameArgsPrevValue = this.args.bookName;
            next(this, () => {
                this._bookName = this.args.bookName;
            });
        }

        return this._bookName;
    }

    @action
    changeTags(newTags) {
        this.tags = [...newTags];
    }

    @action
    async saveBook(e) {
        e.preventDefault();

        this.args.onSubmit({
            bookName: this._bookName,
            authorFirstName: this.args.authorFirstName,
            authorLastName: this.args.authorLastName,
            pageNumber: this.args.pageNumber,
//            tags: this.tags||this.args.tags,
            tags: this.tags,
            rating: this.args.rating,
            remarLink: this.args.remarLink
        });
    }
}