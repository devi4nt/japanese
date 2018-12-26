export interface IPageStructure {
    title: string;
    description?: string;
    identifier: string;
    children?: IPageStructure[];
    active?: boolean;
}
