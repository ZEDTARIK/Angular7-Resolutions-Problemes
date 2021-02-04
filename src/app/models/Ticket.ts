export interface Forum {
    id?:string;
    technology?: string;
    ticket?: string;
    descriptionProbleme?: string;
    assigniedByUserName?:string;
    priority?:string;
    dueDate?: Date;
    resolutionProbleme?:[];
}
