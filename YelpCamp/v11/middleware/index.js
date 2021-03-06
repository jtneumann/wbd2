// all the middleware goes here
var Campground = require("../models/campground");
var Comment = require("../models/comment");

var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    if (req.isAuthenticated) {
        Campground.findById(req.params.id, (err, foundCampground) => {
            if (err || !foundCampground) {
                req.flash("error", "Campground not found");
                res.redirect("back");
            }
            else {
                //if so does user own the campground
                if (foundCampground.author.id.equals(req.user._id)) {
                    //once up check the route below for "campgrounds/edit" Answer: this for views folder
                    next();
                }
                else {
                    res.redirect("back");
                }
            }
        });
    }
    else {
        res.redirect("back");
    }

};

middlewareObj.checkCommentOwnership = function(req, res, next) {
    if (req.isAuthenticated) {
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            if (err || !foundComment) {
                req.flash("error", "Comment not found");
                res.redirect("back");
            }
            else {
                //if so does user own the comment
                if (foundComment.author.id.equals(req.user._id)) {
                    //once up check the route below for "campgrounds/edit" Answer: this for views folder
                    next();
                }
                else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    }
    else {
        req.flash("error", "You need to be logged in to do that!");
        res.redirect("back");
    }
};

//middleware
middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
};

module.exports = middlewareObj;
