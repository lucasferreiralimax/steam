import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Iniciar sessão no Steam', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Iniciar sessão no Steam');
  });

  it('Login Steam', () => {
    element(by.css("#user")).sendKeys('lucasferreiralimax@gmail.com');
    element(by.css("#pass")).sendKeys('steam');
    browser.sleep(2000)
    element(by.css("#session")).click();
    browser.switchTo().alert().accept();
    browser.sleep(2000)
  });

  it('Login Clean', () => {
    page.navigateTo();
    element(by.css("#user")).sendKeys('lucasferreiralimax@gmail.com');
    element(by.css("#pass")).sendKeys('steam');
    browser.sleep(2000)
    element(by.css("#cancel")).click();
    browser.sleep(2000)
  });

  it('should login close and new', () => {
    element(by.css("#close")).click();
    browser.sleep(2000)
    element(by.css(".btn.new")).click();
    browser.sleep(2000)
  });

  it('should login minimize handler', () => {
    element(by.css("#minimize")).click();
    browser.sleep(2000)
    element(by.css("#minimize")).click();
    browser.sleep(2000)
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
