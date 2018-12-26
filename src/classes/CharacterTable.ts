import { ICharacterGroup, ICharacterGroupData } from "../interfaces/characters";

import { AbstractComponent } from "./AbstractComponent";
import { Character } from "./Character";

export class CharacterTable extends AbstractComponent {
    title: string;
    description: string;
    identifier: string;
    characters: Character[];
    groups: ICharacterGroup[];
    templateHTML = `
    <a id="{{identifier}}"></a>
    <div data-drag-drop>
        <button class="btn btn-sm btn-outline-success float-right" data-start-btn>Start</button>
        <button class="btn btn-sm btn-outline-danger float-right ml-2 d-none" data-stop-btn>Stop</button>
        <button class="btn btn-sm btn-outline-dark float-right ml-2 d-none" data-reset-btn>Reset</button>
        <span class="badge badge-danger float-right ml-2 mt-1 d-none" data-mistake></span>
        <span class="badge badge-success float-right ml-2 mt-1 d-none" data-correct></span>
        <span class="badge badge-default float-right ml-2 mt-1 d-none" data-timer></span>

        <h3>{{title}} <small>{{description}}</small></h3>
        <table class="table table-sm table-dark table-bordered">
        <thead>
            <tr>
                {{#each columns}}
                <th>{{identifier}}</th>
                {{/each}}
            </tr>
        </thead>
        <tbody>
            <tr>
                {{#each columns}}
                <td>{{#each characters}}<div class="lead"><span class="potential-drag-target"><span data-type="{{type}}" data-romanji="{{romanji}}" data-symbol="{{symbol}}" data-drag-element>{{symbol}}</span></span> <small class="text-muted">{{romanji}}</small></div>{{/each}}</td>
                {{/each}}
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
        groups: ICharacterGroup[]
    ) {
        super();
        this.title = title;
        this.identifier = identifier;
        this.description = description;
        this.characters = characters;
        this.groups = groups;
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
        this.groups.forEach(group => {
            groupData.push({
                identifier: group.identifier,
                characters: this.filter(group.filter)
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
            columns: data
        });
    }
}
