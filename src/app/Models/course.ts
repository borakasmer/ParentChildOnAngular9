export class Course {
    Name: string;
    TotalHours: number;
    Price: number;
    Id: number
    ColorList: string[];
    constructor(name?: string, price?: number, hourse?: number, Id?: number) {
        this.Name = name;
        this.Price = price;
        this.TotalHours = hourse;
        this.Id = Id;
        this.ColorList = ["Red", "Green", "Blue"];
    }
}