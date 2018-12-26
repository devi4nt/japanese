import { AbstractComponent } from "./AbstractComponent";
import { Phrase } from "./Phrase";

export class PhraseTable extends AbstractComponent {
    phrases: Phrase[];
    templateHTML = `<h2>{{title}}</h2><table class="table table-sm table-dark table-bordered">
    <thead>
        <tr>
            <th>Japanese</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {{#each phrases}}
        <tr>
            <td><span class="lead">{{#each symbols}}{{symbol}}{{/each}}</span> <small class="text-muted">{{#if romanji}}{{romanji}}{{else}}{{#each symbols}}{{romanji}}{{/each}}{{/if}}</small></span></td>
            <td>{{#each english}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}</td>
        </tr>
        {{/each}}
    </tbody>
    </table>`;

    constructor(phrases: Phrase[]) {
        super();
        this.phrases = phrases;
    }

    html(title: string): string {
        return this.compile({ title, phrases: this.phrases });
    }
}
