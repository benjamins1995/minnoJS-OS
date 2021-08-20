

define(['questAPI'], function(quest){
    var API = new quest();

    API.addSequence([
        {
            name: 'socioaftervideo',
            header: 'שאלון - על הסרטון',
            questions:[

                {
                    type: 'selectOne',
                    stem: '<div> האם האדם שבתמונה הוא האדם המופיע בסרטון? </div> <br> <img src="study/str/we.png"> <br>' ,
                    autoSubmit:false,
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
                    type: 'selectOne',
                    stem: 'עד כמה אתה בטוח בתשובתך?' ,
                    autoSubmit:true,
                    numericValues:true,
                    required:true,
                    style:'multiButtons',
                    errorMsg: {
                        required: "מילוי חובה"
                    },
                    answers : [
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                    ],
                },


            ]
        },
    ]);





    return API.script;
});


