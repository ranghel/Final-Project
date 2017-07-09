var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var models = require('../models');
var sha1 = require('sha1');
var cookie = require('cookie');
var cookies = {};



router.get('/', function (req, res){
    cookies = cookie.parse(req.headers.cookie || '');
    if(cookies.email && cookies.id){
        return res.redirect("/users/"+cookies.id);
    }

    models.Users.findAll().then(function (data) {
        res.render('index', {Users : data});
    });

});

router.post('/api/newuser', function(req, res) {
    var currentUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        userImage: req.body.userImage
    };

    models.Users.create(currentUser).then(function() {
        models.Users.findOne(
            {
                where: {
                    email: currentUser.email
                }
            }).then(function(user){

            setEmailCookie = cookie.serialize('email', currentUser.email);
            setIdCookie = cookie.serialize('id', user.id);
            res.setHeader("Set-Cookie", setEmailCookie);
            res.append("Set-Cookie", setIdCookie);
            var hash = '/users/'+user.id;
            res.json(user);
        });
    });
});



router.post('/api/newpost', function(req, res) {
    var currentPost = {
        medication_name: req.body.medication_name,
        description: req.body.description,
        quantity: req.body.quantity,
        expiration_date: req.body.expiration_date,
        imageURL: req.body.imageURL,
        UsersId: req.user.id,
        requestStatus: req.body.requestStatus
    };

    models.Posts.create(currentPost).then(function() {
        res.json(currentPost);
    });
});


router.get('/users/:id?', function(req, res){
    var userID = req.params.id;

    models.Users.findOne({ where: {id: userID} }).then(function (loggedUser){

        models.Posts.findAll({
            where: {
                'UsersId':
                    {
                        ne: userID
                    },
                'requestStatus':
                    {
                        ne: 1
                    }
            }
        })
            .then(function(allPosts){

                models.Requests.findAll(
                    {
                        where: {
                            'firstUserID': userID
                        }
                    }
                ).then(function(requests){

                    var secondUserIDs = [];
                    var secondUserPostIDs = [];
                    var firstUserPostIDs = [];

                    for(var i = 0; i < requests.length; i++){
                        secondUserIDs.push(requests[i].secondUserID);
                        firstUserPostIDs.push(requests[i].firstUserPostID);
                        secondUserPostIDs.push(requests[i].secondUserPostID);
                    }

                    var requestedObjects = [];

                    for(var k = 0; k < secondUserPostIDs.length; k++){

                        var nowPost = secondUserPostIDs[k];
                        requestedObjects.push(allPosts[nowPost - 1]);
                    }

                    models.Users.findAll(
                        {
                            where: {
                                'id':
                                    {in: secondUserIDs}
                            }
                        }
                    ).then(function(secondUserNames){


                        res.render('userView', {allPosts: allPosts, secondUserNames: secondUserNames, requestedObjects: requestedObjects, loggedUser: loggedUser});

                    });
                });

            });

    });

});


router.get('/manageView', function (req, res){
    cookies = cookie.parse(req.headers.cookie || '');
    if(!cookies.email && !cookies.id){
        return res.redirect("/");
    }
    models.Users.findAll().then(function (data) {
        res.render('manageView', {Users : data});
    });
});


router.delete('/post/delete/:id', function (req, res) {
    models.Posts.destroy({where: {id:req.params.id}}).then(function() {
        res.render('manageView', {Users : data});
    });
});


router.put('/post/update/:id', function(req,res) {
    var updatePost = {
        medication_name: req.body.medication_name,
        description: req.body.description,
        quantity: req.body.quantity,
        expiration_date: req.body.expiration_date,
        imageURL: req.body.imageURL,
        UsersId: req.body.UsersId,
        requestStatus: req.body.requestStatus
    };

    models.Posts.update(updatePost, {where: {id:req.params.id}}).then(function(){
        res.render('manageView', {Users : data});
    });
});

var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');



router.post('/login', function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    models.Users.findOne(
        {
            where: {
                email: email
            }
        }).then(function(result){

        if (result !== null){

            if(password === result.password){
                setEmailCookie = cookie.serialize('email', email);
                setIdCookie = cookie.serialize('id', result.id);
                res.setHeader("Set-Cookie", setEmailCookie);
                res.append("Set-Cookie", setIdCookie);
                var hash = '/users/'+result.id;
                res.json({url: hash});
            } else {

                res.json({errorMessage: 'Password Incorrect'});
            }

        } else {
            res.json({errorMessage: 'Incorrect Email'});
        }

    })
});


router.get('/logout', function (req, res){
    res.clearCookie("email");
    res.clearCookie("password");
    res.clearCookie("id");
    res.json({});
});



module.exports = router;