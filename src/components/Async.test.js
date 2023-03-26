import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async conponent test menu list", () => {
    test('renders menu list',async () => {
        render(<Async/>)

        const menuListElement = await screen.findAllByRole('listitem');
        expect(menuListElement).not.toHaveLength(0);
    });
}); 