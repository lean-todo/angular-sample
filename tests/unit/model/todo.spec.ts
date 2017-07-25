import { Todo } from "../../../src/app/todos/model/todo";

describe('Model Todo', () => {

    let todo: Todo;

    beforeEach(() => {
        todo = new Todo();
    });

    it('is creatable', () => {

        expect(true).toBe(true);

    });
});