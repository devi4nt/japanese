import { pageStructure } from '../constants/pages';
import { AbstractPage } from './AbstractPage';

export class DefaultPage extends AbstractPage {
    templateHTML = ``;
    pageStructure = pageStructure;

    pageHTML(): string {
        return this.contentsHTML();
    }
}
