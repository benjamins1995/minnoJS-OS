
define(['questAPI'], function(Quest){
    var API = new Quest();


    // ### Sequence
    API.addSequence(
        [
            {
                decline:false,
                numbered: false,
                questions :
                    {
                        type:'selectOne',
                        stem: 'האם תרצה להשתתף במשימה המלאה , או לדלג לחלק של מבחן אסוציאציות? ' ,
                        name:'longOrShort',
                        autoSubmit:true,
                        required:true,
                        minWidth: '10%',
                        answers : [
                            {
                                text: 'התחל מחקר',
                                value : 'yesText'
                            },
                            {
                                text: 'דלג למבחן',
                                value : 'noText'
                            }
                        ]
                    }
            }
        ]);

    /**
     Return the script to piquest's god, or something of that sort.
     **/
    return API.script;
});



















//דוגמא לשימוש בפונק' ללא עמוד ניפרד, רק להכליל ברצף ב mgr

// {
//     type:'yesNo',
//         heading: 'האם אתה בטוח',
//     text: 'האם תרצה להשתתף במשימה המלאה (15 דקות), או בקצרה מבחן iat בלבד (5 דקות) ',
//     yesText: 'ברצוני להמשיך',
//     noText: 'בוחר לדלג לחלק של המבחן',
//     //משתנה גלובלי בשם longOrShort אשר יחזיר אמת או שקר ובהתאם נעביר את את ה user
//     path: 'longOrShort',
//     reRender : 'true'
// },