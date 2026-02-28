import { APIDemosPage } from "../pageobjects/apidemos.page";

export class APIDemosActions {
  async waitForAppBtn() {
    await APIDemosPage.appBtn().waitForDisplayed({ timeout: 5000 });
  }

  async clickAppBtn() {
    await APIDemosPage.appBtn().click();
  }

  async verifyAppBtn() {
    return await APIDemosPage.appBtn().isDisplayed();
  }

  async waitForTextEntryDialogBtn() {
    await APIDemosPage.textEntryDialogBtn().waitForDisplayed({ timeout: 5000 });
  }

  async clickAlertDialogsBtn() {
    await APIDemosPage.alertDialogsBtn().click();
  }

  async clickTextEntryDialogBtn() {
    await APIDemosPage.textEntryDialogBtn().click();
  }

  async fillNameInput(value: string) {
    await APIDemosPage.inputNameEntryDialog().setValue(value);
  }

  async fillPasswordInput(value: string) {
    await APIDemosPage.inputPasswordEntryDialog().setValue(value);
  }

  async getNameFieldValue() {
    return await APIDemosPage.inputNameEntryDialog().getText();
  }

  async getPasswordFieldValue() {
    return await APIDemosPage.inputPasswordEntryDialog().getText();
  }

  async clickDialogOKBtn() {
    await APIDemosPage.dialogOKBtn().click();
  }
}
