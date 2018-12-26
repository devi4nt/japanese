export abstract class AbstractComponent {
    abstract templateHTML: string;

    compile(templateData?: any): string {
        const templateDelegate: HandlebarsTemplateDelegate = Handlebars.compile(
            this.templateHTML
        );
        return templateDelegate(templateData);
    }
}
