import { Todo } from "../../../src/app/todos/model/todo";

// TODO: test creation failures on missing params
// TODO: think about an immutable object
// TODO: think about 'do i need to test the props?'

describe('Model Todo', () => {

    describe('it is creatable', () => {

        it('with id, text and done state', () => {
            const todo = new Todo(-1, 'Unit Tests', false);
            expect(todo.id).toEqual(-1);
            expect(todo.text).toEqual('Unit Tests');
            expect(todo.done).toEqual(false);
        });

        it('with id and text and default done state false', () => {
            const todo = new Todo(-1, 'Unit Tests');
            expect(todo.id).toEqual(-1);
            expect(todo.text).toEqual('Unit Tests');
            expect(todo.done).toEqual(false);
        });
    });
    
});