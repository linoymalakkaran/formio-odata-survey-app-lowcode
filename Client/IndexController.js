angular.module('surveyapp').controller('indexController', ['$scope',
    function ($scope) {

       

        $scope.submitAnswers = function () {
            debugger;
            var elements = $("input[name ^='qans']:checked");
            var validationResult = true;
            if ($scope.questions && $scope.questions.length == 8) {
                validationResult = true;
            }
            else {
                validationResult = feedbackValidate(elements.length);
            }

            if (!validationResult)
                return;

            var q1Id = $("#msQId_0").val();
            //var q1Answer = $("#msQans_0").val();
            var q1Answer = $("input[name='qans0']:checked").val();
            var q1feed = $("#msQfeed_0").val();

            var q2Id = $("#msQId_1").val();
            var q2Answer = $("input[name='qans1']:checked").val();
            var q2feed = $("#msQfeed_1").val();


            var q3Id = $("#msQId_2").val();
            var q3Answer = $("input[name='qans2']:checked").val();
            var q3feed = $("#msQfeed_2").val();

            var q4Id = $("#msQId_3").val();
            var q4Answer = $("input[name='qans3']:checked").val();
            var q4feed = $("#msQfeed_3").val();

            var q5Id = $("#msQId_4").val();
            var q5Answer = $("input[name='qans4']:checked").val();
            var q5feed = $("#msQfeed_4").val();

            var q6Id = $("#msQId_5").val();
            var q6Answer = $("input[name='qans5']:checked").val();
            var q6feed = $("#msQfeed_5").val();

            var q7Id = $("#msQId_6").val();
            var q7Answer = $("input[name='qans6']:checked").val();
            var q7feed = $("#msQfeed_6").val();

            var q8Id = '';
            var q8Answer = '';
            var q8feed = '';

            if (elements && elements.length == 7) {
                q8Id = $("#msQId_7").val();
                q8Answer = $("input[name='qans7']:checked").val();
                q8feed = $("#feedback_7").val();
            }
            else {
                q8Id = $("#msQId_7").val();
                q8feed = null;
                q8Answer = '';
                if ($('#msQans_17').prop('checked')) {
                    q8Answer = $('#msQans_17').attr('value');
                }
                if ($('#msQans_27').prop('checked')) {
                    q8Answer = q8Answer + ',' + $('#msQans_27').attr('value');
                }
                if ($('#msQans_37').prop('checked')) {
                    q8Answer = q8Answer + ',' + $('#msQans_37').attr('value');
                }

                var q9Id = $("#msQId_8").val();
                var q9Answer = $("input[name='qans8']:checked").val();
                var q9feed = $("#msQfeed_8").val();

                var q10Id = $("#msQId_9").val();
                var q10Answer = $("input[name='qans9']:checked").val();
                var q10feed = $("#msQfeed_9").val();

                var q11Id = $("#msQId_10").val();
                var q11Answer = $("input[name='qans10']:checked").val();
                var q11feed = $("#msQfeed_10").val();

                var q12Id = $("#msQId_11").val();
                var q12Answer = $("input[name='qans11']:checked").val();
                var q12feed = $("#msQfeed_11").val();

                var q13Id = $("#msQId_12").val();
                var q13Answer = null;

                var q13feed = $("#msQfeed_12").val();
            }

            if (elements && elements.length == 7) {
                $scope.answers = [
                    {
                        "questionId": Number(q1Id),
                        "surveyRating": q1Answer,
                        "feedbackComments": q1feed
                    },
                    {
                        "questionId": Number(q2Id),
                        "surveyRating": q2Answer,
                        "feedbackComments": q2feed
                    },
                    {
                        "questionId": Number(q3Id),
                        "surveyRating": q3Answer,
                        "feedbackComments": q3feed
                    },
                    {
                        "questionId": Number(q4Id),
                        "surveyRating": q4Answer,
                        "feedbackComments": q4feed
                    },
                    {
                        "questionId": Number(q5Id),
                        "surveyRating": q5Answer,
                        "feedbackComments": q5feed
                    },
                    {
                        "questionId": Number(q6Id),
                        "surveyRating": q6Answer,
                        "feedbackComments": q6feed
                    },
                    {
                        "questionId": Number(q7Id),
                        "surveyRating": q7Answer,
                        "feedbackComments": q7feed
                    },
                    {
                        "questionId": Number(q8Id),
                        "surveyRating": q8Answer,
                        "feedbackComments": q8feed
                    }
                ];
            }
            else {

                $scope.answers = [
                    {
                        "questionId": Number(q1Id),
                        "surveyRating": q1Answer,
                        "feedbackComments": q1feed
                    },
                    {
                        "questionId": Number(q2Id),
                        "surveyRating": q2Answer,
                        "feedbackComments": q2feed
                    },
                    {
                        "questionId": Number(q3Id),
                        "surveyRating": q3Answer,
                        "feedbackComments": q3feed
                    },
                    {
                        "questionId": Number(q4Id),
                        "surveyRating": q4Answer,
                        "feedbackComments": q4feed
                    },
                    {
                        "questionId": Number(q5Id),
                        "surveyRating": q5Answer,
                        "feedbackComments": q5feed
                    },
                    {
                        "questionId": Number(q6Id),
                        "surveyRating": q6Answer,
                        "feedbackComments": q6feed
                    },
                    {
                        "questionId": Number(q7Id),
                        "surveyRating": q7Answer,
                        "feedbackComments": q7feed
                    },
                    {
                        "questionId": Number(q8Id),
                        "surveyRating": q8Answer,
                        "feedbackComments": q8feed
                    },
                    {
                        "questionId": Number(q9Id),
                        "surveyRating": q9Answer,
                        "feedbackComments": q9feed
                    }
                    ,
                    {
                        "questionId": Number(q10Id),
                        "surveyRating": q10Answer,
                        "feedbackComments": q10feed
                    }
                    ,
                    {
                        "questionId": Number(q11Id),
                        "surveyRating": q11Answer,
                        "feedbackComments": q11feed
                    }
                    ,
                    {
                        "questionId": Number(q12Id),
                        "surveyRating": q12Answer,
                        "feedbackComments": q12feed
                    }
                    ,
                    {
                        "questionId": Number(q13Id),
                        "surveyRating": q13Answer,
                        "feedbackComments": q13feed
                    }
                ];
            }
            $("#loadingScreen").show();
            apiService.post('Customs/CustomerSurvey/SaveCustomerFeedback', '', $scope.answers, function (result) {
                $("#loadingScreen").hide();
                var response = result.data.ResponseResult;
                var msg = "Error in adding/updating Survey";
                if (response) {
                    $("#Mspage5").append("<h2 class='thanks'>Thank you!</h2>");
                    $scope.goNext();

                    $("#MSbackBtn").css("display", "none");
                    $("#MSnextBtn").css("display", "none");
                    $("#MSsubmitBtn").css("display", "none");
                }
                else {
                    modalErrorShow(msg);
                }
            },
                function (result) {
                    $("#loadingScreen").hide();
                });

        };

        function bindData() {
            // remove active class from all pages
            $(".Mspage").removeClass("Msactive");
            // add active class to first page 
            $("#Mspage1").addClass("Msactive");

            //get current page
            $("#MsPageNumber").text(thisPage);

            // put the progress bar value
            $("#MsPbar").css("width", progress + "%");

            //hide back button
            $("#MSbackBtn").css("display", "none");

            //hide submit button
            $("#MSsubmitBtn").css("display", "none");

            if ($scope.questions && $scope.questions[0].id)

                for (var i = 0; i < $scope.questions.length; i++) {
                    var index = i + 1;
                    if (i <= 4) {

                        if ($scope.questions[i].question.toLowerCase().includes('how often')) {
                            $("#Mspage2").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +
                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '1' + i + "' type ='radio' class='Msinputrange' value='Monthly' checked='checked' > <span>Monthly</span></label>" +
                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '2' + i + "' type ='radio' class='Msinputrange' value='Weekly' > <span>Weekly</span></label>" +
                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '3' + i + "' type ='radio' class='Msinputrange' value='Daily' > <span>Daily</span></label>" +
                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '3' + i + "' type ='radio' class='Msinputrange' value='I dont Use' > <span>I don't Use</span></label>" +
                                "<label id='validationmsg_" + i + "' class='validation-error-label' style='display:none;'>Please select any one</label>"
                            );
                        }
                        else {
                            $("#Mspage2").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +
                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '1' + i + "' type ='radio' class='Msinputrange' value='1' onchange='changeRange(this)' > <span>1</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '2' + i + "' type ='radio' class='Msinputrange' value='2' onchange='changeRange(this)' > <span>2</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '3' + i + "' type ='radio' class='Msinputrange' value='3' onchange='changeRange(this)' > <span>3</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '4' + i + "' type ='radio' class='Msinputrange' value='4' onchange='changeRange(this)' > <span>4</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '5' + i + "' type ='radio' class='Msinputrange' value='5' onchange='changeRange(this)' checked='checked' > <span>5</span></label>" +
                                "<textarea maxlength='1000' id='msQfeed_" + i + "' class='form-control MsFeedback'></textarea>" +
                                "<label id='validationmsg_" + i + "' class='validation-error-label' style='display:none;'>Please add comment</label>"
                            );
                        }
                    }

                    if (i > 4 && i <= 8) {
                        if ($scope.questions[i].question.includes('Which system would you prefer to use if all services were combined under a single Platform')) {
                            $("#Mspage3").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +
                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '1' + i + "' type ='radio' class='Msinputrange' value='MAMAR' checked='checked'  > <span>MAMAR</span></label>" +
                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '2' + i + "' type ='radio' class='Msinputrange' value='DHABI' > <span>DHABI</span></label>" +
                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '3' + i + "' type ='radio' class='Msinputrange' value='TAMM'  > <span>TAMM</span></label>" +
                                "<label id='validationmsg_" + i + "' class='validation-error-label' style='display:none;'>Please select any one service</label>"
                            );
                        }
                        else if ($scope.questions[i].question.toLowerCase().includes('suggestions')) {
                            $("#Mspage3").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +
                                "<textarea id='feedback_" + i + "' maxlength='1000' class='form-control' style='width:90%'></textarea>");
                        }
                        else if ($scope.questions[i].question.includes('How do you rate MAMAR services')) {
                            $("#Mspage3").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +
                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '1' + i + "' type ='radio' class='Msinputrange' value='1' onchange='changeRange(this)' > <span>1</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '2' + i + "' type ='radio' class='Msinputrange' value='2' onchange='changeRange(this)' > <span>2</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '3' + i + "' type ='radio' class='Msinputrange' value='3' onchange='changeRange(this)' > <span>3</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '4' + i + "' type ='radio' class='Msinputrange' value='4' onchange='changeRange(this)' > <span>4</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '5' + i + "' type ='radio' class='Msinputrange' value='5' onchange='changeRange(this)' checked='checked' > <span>5</span></label>" +
                                "<textarea maxlength='1000' id='msQfeed_" + i + "' class='form-control MsFeedback'></textarea>" +
                                "<label id='validationmsg_" + i + "' class='validation-error-label' style='display:none;'>Please add comment</label>"
                            );
                        }
                        else {
                            if (i == 7) {
                                $("#Mspage3").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                    "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +
                                    "<label class='mr-20'><input name='qans1" + i + "' id='msQans_" + '1' + i + "' type ='radio' class='Msinputrange' value='CreditCard' onchange='changeRange(this)' checked='checked' onclick='clickCheckBox(this)'> <span>Credit Card</span></label>" +
                                    "<label class='mr-20'><input name='qans2" + i + "' id='msQans_" + '2' + i + "' type ='radio' class='Msinputrange' value='BankTransfer' onchange='changeRange(this)' onclick='clickCheckBox(this)'> <span>Bank Transfer</span></label>" +
                                    "<label class='mr-20'><input name='qans3" + i + "' id='msQans_" + '3' + i + "' type ='radio' class='Msinputrange' value='eWallet' onchange='changeRange(this)' onclick='clickCheckBox(this)'> <span>ewallet</span></label>" +
                                    "<label id='validationmsg_" + i + "' class='validation-error-label' style='display:none;'>Please select any payment method</label>"
                                );
                            }
                            else {
                                $("#Mspage3").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                    "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +

                                    "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '1' + i + "' type ='radio' class='Msinputrange' value='1' onchange='changeRange(this)' >  <span class='mr-5'>1</span></label>" +
                                    "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '2' + i + "' type ='radio' class='Msinputrange' value='2' onchange='changeRange(this)' > <span class='mr-5'>2</span></label>" +
                                    "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '3' + i + "' type ='radio' class='Msinputrange' value='3' onchange='changeRange(this)' > <span class='mr-5'>3</span></label>" +
                                    "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '4' + i + "' type ='radio' class='Msinputrange' value='4' onchange='changeRange(this)' > <span class='mr-5'>4</span></label>" +
                                    "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '5' + i + "' type ='radio' class='Msinputrange' value='5' onchange='changeRange(this)' checked='checked'> <span class='mr-5'>5</span></label>" +

                                    "<textarea maxlength='1000' id='msQfeed_" + i + "' class='form-control MsFeedback'></textarea>" +
                                    "<label id='validationmsg_" + i + "' class='validation-error-label' style='display:none;'>Please add comment</label>");
                            }
                        }
                    }

                    if (i > 8) {

                        if (i == 12) {
                            $("#Mspage4").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +
                                "<textarea maxlength='1000' id='msQfeed_" + i + "' class='form-control'></textarea>");
                        }
                        else if (i == 10) {
                            $("#Mspage4").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +

                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '1' + i + "' type ='radio' class='Msinputrange' value='Yes' onchange='changeRange(this)' checked='checked' > <span>Yes</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '2' + i + "' type ='radio' class='Msinputrange' value='No' onchange='changeRange(this)' > <span>No</span></label>" +

                                "<textarea maxlength='1000' id='msQfeed_" + i + "' class='form-control'></textarea>" +
                                "<label id='validationmsg_" + i + "' class='validation-error-label' style='display:none;'>Please add comment</label>");
                        }
                        else {
                            $("#Mspage4").append("<p class='mt-20'>" + index + ". " + $scope.questions[i].question + "</p>" +
                                "<input id='msQId_" + i + "' type='hidden' value='" + $scope.questions[i].id + "'>" +

                                "<label class='mr-20'><input name='qans" + i + "' id='msQans_" + '1' + i + "' type ='radio' class='Msinputrange' value='1' onchange='changeRange(this)' > <span>1</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '2' + i + "' type ='radio' class='Msinputrange' value='2' onchange='changeRange(this)' > <span>2</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '3' + i + "' type ='radio' class='Msinputrange' value='3' onchange='changeRange(this)' > <span>3</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '4' + i + "' type ='radio' class='Msinputrange' value='4' onchange='changeRange(this)' > <span>4</span></label>" +
                                "<label class='mr-20'><input  name='qans" + i + "' id='msQans_" + '5' + i + "' type ='radio' class='Msinputrange' value='5' onchange='changeRange(this)' checked='checked'><span>5</span></label>" +


                                "<textarea maxlength='1000' id='msQfeed_" + i + "' class='form-control MsFeedback'></textarea>" +
                                "<label id='validationmsg_" + i + "' class='validation-error-label' style='display:none;'>Please add comment</label>");
                        }

                    }

                }


        }

        function getSurveyQuestions() {
            resetSurveyStatus();
            apiService.get('Customs/CustomerSurvey/GetSurveyQuestions', {}, function (results) {
                var resultData = results.data.ResponseResult;
                if (resultData) {
                    $scope.questions = resultData;
                    $('#MSsurveyModal').modal({ backdrop: 'static', keyboard: false });
                    bindData();
                }
            },
                function error(response) {
                    console.log(response);
                });
        }

        function populateSurveyQuestions() {
            apiService.get('Customs/CustomerSurvey/IsSurveyRequired', {}, function (results) {
                var resultData = results.data.ResponseResult;
                if (resultData) {
                    getSurveyQuestions();
                }
            },
                function error(response) {
                    console.log(response);
                });
        }

      
    }]);