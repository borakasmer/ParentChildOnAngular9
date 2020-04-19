export class ColumnDefs{
    headerName: string;
    field: string;

    constructor(_headerName?:string,_field?:string){
        this.headerName=_headerName;
        this.field=_field;        
    }
}