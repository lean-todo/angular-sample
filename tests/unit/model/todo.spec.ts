import { Todo } from "../../../src/app/todos/model/todo";

describe('Model Todo', () => {

    let todo: Todo;

    beforeEach(() => {
        todo = new Todo();
    });

    it('is creatable', () => {

        expect(todo instanceof Todo).toBeTruthy();

    });

    it('has an id property', () => { 

        todo.id = 17;
        expect(todo.id).toEqual(17);

    });

    it('has a text property', () => { 

        todo.text = 'Unit tests';
        expect(todo.text).toEqual('Unit tests');

    });

    it('has a done property', () => { 

        todo.done = true; 
        expect(todo.done).toEqual(true);

    });

    it('can be created with initial text', () => {

        const todo = new Todo('Unit Tests');
        expect(todo.text).toEqual('Unit Tests');
        
    });
});