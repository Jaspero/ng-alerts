/// <reference path="../node_modules/@types/jasmine/index.d.ts" />

namespace jasmine {
    interface Matchers {
        toHaveText(text: string): boolean;
        toContainText(text: string): boolean;
    }
}

beforeEach(() => {
    jasmine.addMatchers({

        toHaveText: function() {
            return {
                compare: function(actual, expectedText) {
                    let actualText = actual.textContent;
                    return {
                        pass: actualText === expectedText,
                        get message() {
                            return 'Expected ' + actualText + ' to equal ' + expectedText;
                        }
                    };
                }
            };
        },

        toContainText: function() {
            return {
                compare: function(actual, expectedText) {
                    let actualText = actual.textContent;
                    return {
                        pass: actualText.indexOf(expectedText) > -1,
                        get message() {
                            return 'Expected ' + actualText + ' to contain ' + expectedText;
                        }
                    };
                }
            };
        }
    });
});