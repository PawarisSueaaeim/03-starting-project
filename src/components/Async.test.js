import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async conponent test menu list", () => {
    test('renders menu list',async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1' , title: 'test'}]
        });
        render(<Async/>)

        const menuListElement = await screen.findAllByRole('listitem');
        expect(menuListElement).not.toHaveLength(0);
    });
}); 