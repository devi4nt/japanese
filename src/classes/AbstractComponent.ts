// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const Handlebars: any;
export abstract class AbstractComponent {
    abstract templateHTML: string;

    compile(templateData?: object): string {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const templateDelegate: any = Handlebars.compile(this.templateHTML);
        return templateDelegate(templateData);
    }
}
