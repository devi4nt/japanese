import { ICharacterGroup, ICharacterGroupData } from '../interfaces/characters';

import { AbstractComponent } from './AbstractComponent';
import { Character } from './Character';

export class CharacterTable extends AbstractComponent {
    title: string;
    description: string;
    identifier: string;
    characters: Character[];
    rowGroups: ICharacterGroup[];
    columnGroups: ICharacterGroup[];
    templateHTML = `
    <a id="{{identifier}}"></a>
    <div data-drag-drop>
        <button class="btn btn-sm btn-outline-success float-right" data-start-btn>Start</button>
        <button class="btn btn-sm btn-outline-danger float-right ml-2 d-none" data-stop-btn>Stop</button>
        <button class="btn btn-sm btn-outline-dark float-right ml-2 d-none" data-reset-btn>Reset</button>
        <span class="badge badge-danger float-right ml-2 mt-1 d-none" data-mistake></span>
        <span class="badge badge-success float-right ml-2 mt-1 d-none" data-correct></span>
        <span class="badge badge-default float-right ml-2 mt-1 d-none" data-timer></span>

        <h4>{{title}} <small>{{description}}</small></h4>
        <table class="table table-sm table-dark table-bordered">
        <thead>
            <tr>
                {{#each columns}}
                <th>{{identifier}}</th>
                {{/each}}
                {{#if rows}}
                <th class="row-identifier"></th>
                {{/if}}
            </tr>
        </thead>
        <tbody>
            <tr>
                {{#each columns}}
                <td>{{#each characters}}<div class="lead">{{#if symbol}}<span class="potential-drag-target"><span data-type="{{type}}" data-romanji="{{romanji}}" data-symbol="{{symbol}}" data-drag-element>{{symbol}}</span></span> <small class="text-muted">{{romanji}}</small>{{else}}&nbsp;{{/if}}</div>{{/each}}</td>
                {{/each}}
                {{#if rows}}
                <td class="text-center">{{#each rows}}<div class="lead">{{identifier}}</div>{{/each}}</td>
                {{/if}}
            </tr>
        </tbody>
        </table>
        <div data-drag-source class="lead drag-source"></div>
    </div>`;

    constructor(
        title: string,
        description: string,
        identifier: string,
        characters: Character[],
        columnGroups: ICharacterGroup[],
        rowGroups: ICharacterGroup[],
    ) {
        super();
        this.title = title;
        this.identifier = identifier;
        this.description = description;
        this.characters = characters;
        this.columnGroups = columnGroups;
        this.rowGroups = rowGroups;
    }

    filter(regExp: RegExp): Character[] {
        const filtered: Character[] = [];
        this.characters.forEach(character => {
            if (regExp.test(character.romanji)) {
                filtered.push(character);
            }
        });
        return filtered;
    }

    data(): ICharacterGroupData[] {
        const groupData: ICharacterGroupData[] = [];
        this.columnGroups.forEach(group => {
            const rowCharacters: Character[] = [];
            const characters = this.filter(group.filter);
            this.rowGroups.forEach(rowGroup => {
                let matched = false;
                characters.forEach(character => {
                    // n (include in A row)
                    if (
                        (character.romanji === 'n' && rowGroup.vowel.romanji === 'a') ||
                        character.vowel === rowGroup.vowel ||
                        character.symbol === rowGroup.vowel.symbol
                    ) {
                        rowCharacters.push(character);
                        matched = true;
                    }
                });
                if (!matched) {
                    rowCharacters.push({ symbol: '' }); // spacer
                }
            });
            groupData.push({
                identifier: group.identifier,
                characters: rowCharacters,
            });
        });
        return groupData;
    }

    html(): string {
        const data: ICharacterGroupData[] = this.data();
        return this.compile({
            title: this.title,
            description: this.description,
            identifier: this.identifier,
            rows: this.rowGroups,
            columns: data,
        });
    }
}
