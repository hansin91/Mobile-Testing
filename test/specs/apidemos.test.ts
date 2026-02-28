import { generateUsername } from "unique-username-generator";
import * as crypto from "crypto";
import { generate } from "generate-password";

import { APIDemosActions } from "../actions/apidemos.action";

const hashPassword = (password: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
};

const verifyPassword = (password: string, hashedPassword: string) => {
  const [salt, hash] = hashedPassword.split(":");
  const verifyHash = crypto.scryptSync(password, salt, 64).toString("hex");
  return hash === verifyHash;
};

describe("APIDemos - Text Entry Dialog", async () => {
  const apiDemosAction = new APIDemosActions();
  let enteredPassword = "";
  const username = generateUsername("", 2, 10);
  const password = generate({ length: 10, numbers: true });
  const hashedPassword = hashPassword(password);

  before(async () => {
    await driver.relaunchActiveApp();
    await apiDemosAction.waitForAppBtn();
    await apiDemosAction.clickAppBtn();
    await apiDemosAction.clickAlertDialogsBtn();
    await apiDemosAction.waitForTextEntryDialogBtn();
    await apiDemosAction.clickTextEntryDialogBtn();
    enteredPassword = password;
    await apiDemosAction.fillNameInput(username);
    await apiDemosAction.fillPasswordInput(password);
  });

  it("Valid username", async () => {
    const inputName = await apiDemosAction.getNameFieldValue();
    expect(inputName).not.toBeNull();
    expect(inputName).not.toBeUndefined();
    expect(inputName).toHaveLength(username.length);
    expect(inputName).toEqual(username);
  });

  it("Password is not null / empty / undefined", async () => {
    const inputPassword = await apiDemosAction.getPasswordFieldValue();
    expect(inputPassword).not.toBeNull();
    expect(inputPassword).not.toBeUndefined();
    expect(inputPassword).toHaveLength(enteredPassword.length);
  });

  it("Password contains uppercase", async () => {
    expect(enteredPassword).toMatch(/[A-Z]/);
  });

  it("Password contains lowercase", async () => {
    expect(enteredPassword).toMatch(/[a-z]/);
  });

  it("Password contains number", async () => {
    expect(enteredPassword).toMatch(/[0-9]/);
  });

  it("Valid password", async () => {
    expect(enteredPassword).toEqual(password);
    expect(verifyPassword(enteredPassword, hashedPassword)).toBe(true);
  });

  after(async () => {
    await apiDemosAction.clickDialogOKBtn();
    await driver.terminateApp("io.appium.android.apis");
  });
});
