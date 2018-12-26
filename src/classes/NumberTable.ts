import { AbstractComponent } from "./AbstractComponent";
import { JapaneseNumber } from "./JapaneseNumber";

export class NumberTable extends AbstractComponent {
    numbers: JapaneseNumber[];
    templateHTML = `<h3>{{title}}</h3><table class="table table-sm table-dark table-bordered">
    <thead>
        <tr>
            <th></th>
            <th>Sino Japanese</th>
            <th>Kanji</th>
            <th>Native Japanese</th>
            <th>Kanji</th>
        </tr>
    </thead>
    <tbody>
        {{#each numbers}}
        <tr>
            <td>{{decimal}}</td>
            <td>
                {{#each sinoPhrases}}
                <span class="lead">{{#each symbols}}{{symbol}}{{/each}}</span> <small class="text-muted">{{#if romanji}}{{romanji}}{{else}}{{#each symbols}}{{romanji}}{{/each}}{{/if}}</small> 
                {{/each}}
            </td>
            <td>{{sinoKanji.symbol}}</td>
            <td>
                {{#each nativePhrases}}
                <span class="lead">{{#each symbols}}{{symbol}}{{/each}}</span> <small class="text-muted">{{#if romanji}}{{romanji}}{{else}}{{#each symbols}}{{romanji}}{{/each}}{{/if}}</small> 
                {{/each}}
            </td>
            <td>{{nativeKanji.symbol}}</td>
        </tr>
        {{/each}}
    </tbody>
    </table>`;

    constructor(numbers: JapaneseNumber[]) {
        super();
        this.numbers = numbers;
    }

    html(title: string): string {
        return this.compile({ title, numbers: this.numbers });
    }
}
