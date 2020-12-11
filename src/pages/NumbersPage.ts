import { japaneseNumberTable } from '../constants/numbers';
import { AbstractPage } from './AbstractPage';

export class NumbersPage extends AbstractPage {
    templateHTML = `<h2>Numbers</h2>`;
    pageHTML(): string {
        return this.templateHTML + japaneseNumberTable.html('0-10');
    }
}
