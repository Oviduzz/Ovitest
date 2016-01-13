/**
 * Created by Admin on 1/11/2016.
 */
Template.postSubmit.created = function () {
    Session.set('postSubmitErrors', {});
}
Template.postSubmit.helpers({
    errorMessage: function (field) {
        return Session.get('postSubmitErrors')[field];
    },
    errorClass: function (field) {
        return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
    }
});
Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };
        var errors = validatePost(post);
        if (errors.title || errors.url)
            return Session.set('postSubmitErrors', errors);

        Meteor.call('postInsert', post, function(error, result) {
                // display the error to the user and abort
            if (error)
                Errors.throw(error.reason);

            Router.go('postPage', {_id: result._id});
        });
    }
});