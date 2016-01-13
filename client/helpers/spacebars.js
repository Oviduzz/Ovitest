/**
 * Created by Admin on 1/12/2016.
 */
Template.registerHelper('pluralize', function (n, thing) {
// fairly stupid pluralizer
        if (n === 1) {
            return '1 ' + thing;
        } else {
            return n + ' ' + thing + 's';
        }
    });