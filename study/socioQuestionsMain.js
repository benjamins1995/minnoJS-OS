define(['questAPI'], function(quest){
    var API = new quest();


// ### Questions


    API.addSequence([
        {
            name: 'socioQuestionsMain',
            header: 'שאלון סוציו דמוגרפי',
            text : '<br/>לפני שתענה/י על שאלות לגבי הסרטון, לפניך שאלות לגבי פרטים בסיסיים.<br/>' +
                'כול הנתונים בסעיף זה הם אנונימיים לחלוטין ולא יבוצע בהם שימוש בפרטים מזהים.<br/>',
            questions:[
                { // question begins
                    //1
                    type: 'text',
                    name: 'fullName',
                    stem: '  מה שמך המלא? ',
                    autoSubmit:true,
                    required: true,
                    input: false,
                    errorMsg: {
                        required: 'מילוי חובה'
                    }


                },
                {
                    //2
                    type: 'selectOne',
                    stem: 'מגדר',
                    name: 'sex',
                    autoSubmit:true,
                    numericValues:true,
                    required:true,
                    style:'multiButtons',
                    errorMsg: {
                        required: "מילוי חובה"
                    },
                    answers : [
                        'אישה',
                        'גבר',
                    ],
                },
                {
                    //3
                    type: 'textNumber',
                    stem: 'גיל:(בשנים)',
                    name: 'age',
                    required: true,
                    autoSubmit:true,
                    min: 1,
                    max: 120,
                    errorMsg: {
                        required: 'מילוי חובה'
                    }
                },
                {
                    //4
                    type: 'text',
                    name: 'countryBirth',
                    autoSubmit:true,
                    stem: 'ארץ לידה',
                    errorMsg: {
                        required: "מילוי חובה"
                    }
                },
                {
                    //5
                    type: 'text',
                    name: 'countryBirthOfParents',
                    autoSubmit:true,
                    stem: 'ארץ לידה של הוריך',
                    required: true,
                    errorMsg: {
                        required: "מילוי חובה"
                    },
                },
                {
                    //6
                    type: 'selectOne',
                    stem: 'השכלה',
                    name: 'education',
                    autoSubmit:true,
                    numericValues:true,
                    required:true,
                    style:'multiButtons',
                    errorMsg: {
                        required: "מילוי חובה"
                    },
                    answers : [
                        'תכונית',
                        'מקצועית',
                        'סטודנט',
                        'אקדמי',
                    ],
                },
                {
                    //7
                    type: 'text',
                    name: 'currentOccupation',
                    autoSubmit:true,
                    stem: 'עיסוק נוכחי',
                    required: true,
                    errorMsg: {
                        required: 'מילוי חובה'
                    }

                },
                // {
                //     // conditions : [{compare:'global.socioQuestionsMain.questions.currentOccupation.response', to:'socioQuestionsMain'}],
                //     // data : [{inherit:'socioQuestionsMain'}]
                // },
                {
                    //8
                    type: 'text',
                    name: 'currentOccupationInYears',
                    autoSubmit:true,
                    stem: 'משך זמן (ותק) בעיסוק (בשנים)',
                    required: true,
                    errorMsg: {
                        required: 'מילוי חובה'
                    }

                },
                {
                    //9
                    type: 'selectOne',
                    stem: 'מצב משפחתי',
                    name: 'familyStatus',
                    autoSubmit:true,
                    numericValues:true,
                    required:true,
                    style:'multiButtons',
                    errorMsg: {
                        required: "מילוי חובה"
                    },
                    answers : [
                        'רווק',
                        'נשוי/נשואה',
                        'גרוש/ה או פרוד/ה',
                        'אלמן/ה',
                        'אחר',
                    ],
                },
                {
                    //10
                    type: 'textNumber',
                    name: 'numberOfChildren',
                    autoSubmit:true,
                    stem: "מספר ילדים",
                    min:0,
                    required: true,
                    errorMsg: {
                        required: "מילוי חובה"
                    }
                },
                {
                    //11
                    type: 'selectOne',
                    stem: 'האם את/ה משתייכ/ת לכוחות הביטחון?',
                    name: 'ministryOfDefenceBelongs',
                    autoSubmit:true,
                    numericValues:true,
                    required:true,
                    style:'multiButtons',
                    errorMsg: {
                        required: "מילוי חובה"
                    },
                    answers : [
                        'כן',
                        'לא',
                    ],
                },
                {
                    //12
                    type: 'selectOne',
                    stem: 'איך הייתה מגדיר את עצמך?',
                    name: 'religionStatus',
                    autoSubmit:true,
                    numericValues:true,
                    required:true,
                    style:'multiButtons',
                    errorMsg: {
                        required: "מילוי חובה"
                    },
                    answers : [
                        'חילוני/ה',
                        'מסרותי/ת',
                        'כיפה סרוגה',
                        'חרדי/ה',
                        'אחר',
                    ],
                },

            ]
        },

    ]);





    API.addSettings("logger", {
        pulse: 203,
        DEBUG : true,
        url: '',
        logfn: function(log,pagesData, global){
            return {name: log.name, set: global.setName};
        }
    });

    console.log(window.piGlobal);


//     //
    // API.addSettings('onEnd', function(){
    //     // Do something: for instance, redirect to 'my/url.html'
    //     // location.href = 'study/quest/selectMulti.js';
    // });



    return API.script;
});
