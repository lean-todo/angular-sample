export class Todo {
    public id: number;
    public text: string;
    public done: boolean;

    constructor(text: string = '') {
        this.text = text;
    }
}
