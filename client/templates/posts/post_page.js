/**
 * Created by Admin on 1/11/2016.
 */
Template.postPage.helpers({
    comments: function () {
        return Comments.find({postId:
        this._id}); }
});