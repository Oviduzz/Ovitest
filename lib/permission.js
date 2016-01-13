/**
 * Created by Admin on 1/11/2016.
 */
// check that the userId specified owns the documents
ownsDocument = function (userId, doc) {
        return doc && doc.userId === userId;
    }