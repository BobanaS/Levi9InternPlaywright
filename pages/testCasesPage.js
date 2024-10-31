import { BasePage } from "./basePage";

export class testCasesPage extends BasePage {
    constructor(page) {
        super(page)
        this.titleT= page.locator('//b[text()="Test Cases"]')
        this.titleRedMessage=page.locator('h5 span[style="color: red;"]')
        this.testCase= page.getByText('Test Case 1: Register User');

    }
}