define(['pipAPI','https://test-minnojs.atwebpages.com/src/js/quiat10.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();



    
    //Randomly choose the attribute words from a larger list of attribute words.
  //Internal studies in Project Implicit found no difference in performance between the words.
    var posWords = API.shuffle([
        'אהבה', 'עידוד', 'חבר', 'הנאה',
        'מעריץ', 'עליז', 'חברות', 'משמח',
        'מחייך', 'מוקיר', 'מצוין', 'שמח',
        'שמחה', 'מרהיב', 'מושך', 'תענוג',
        'התרגשות', 'צחוק', 'אטרקטיבי', 'מענג',
        'נפלא', 'מפואר', 'נעים', 'יפה',
        'פנטסטי', 'שמח', 'מקסים', 'נהדר',
        'חוגגים', 'נהנים', 'מפוארים', 'ניצחון']);

    var negWords = API.shuffle([
        'התעללות', 'צער', 'רעל', 'עצב',
        'כאב', 'בז', 'כישלון', 'מגעיל',
        'כועס', 'מתעב', 'נורא', 'שלילי',
        'מכוער', 'מלוכלך', 'גרוס', 'רשע',
        'רקוב', 'עצב', 'אסון', 'מחריד',
        'בוז', 'נורא', 'גועל נפש', 'שנאה',
        'השפל', 'אנוכי', 'טראגי', 'מטריד',
        'שנאה', 'פוגע', 'מחלה', 'יאקי']);

    return iatExtension({
        category1 : {
            name : 'שמנים', //Will appear in the data.
            title : {
                media : {word : 'אנשים שמנים'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'fatman1.jpg'},
                {image: 'fatman3.jpg'},
                {image: 'fatman4.jpg'},
                {image: 'fatman5.jpg'},
                {image: 'fatman6.jpg'},
                {image: 'fatwoman1.jpg'},
                {image: 'fatwoman2.jpg'},
                {image: 'fatwoman3.jpg'},
                {image: 'fatwoman4.jpg'},
                {image: 'fatwoman6.jpg'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        category2 :    {
            name : 'רזים', //Will appear in the data.
            title : {
                media : {word : 'אנשים רזים'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'thinman1.jpg'},
                {image: 'thinman2.jpg'},
                {image: 'thinman3.jpg'},
                {image: 'thinman5.jpg'},
                {image: 'thinman6.jpg'},
                {image: 'thinwoman1.jpg'},
                {image: 'thinwoman2.jpg'},
                {image: 'thinwoman3.jpg'},
                {image: 'thinwoman5.jpg'},
                {image: 'thinwoman6.jpg'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 :
            {
                name : 'מילים שליליות',
                title : {
                    media : {word : 'מילים שליליות'},
                    css : {color:'#0000FF','font-size':'1.8em'},
                    height : 4 //Used to position the "Or" in the combined block.
                },
                stimulusMedia : [ //Stimuli content as PIP's media objects
                    {word: negWords[0]},
                    {word: negWords[1]},
                    {word: negWords[2]},
                    {word: negWords[3]},
                    {word: negWords[4]},
                    {word: negWords[5]},
                    {word: negWords[6]},
                    {word: negWords[7]}
                ],
                //Stimulus css
                stimulusCss : {color:'#0000FF','font-size':'2.3em'}
            },
        attribute2 :
            {
                name : 'מילים חיוביות',
                title : {
                    media : {word : 'מילים חיוביות'},
                    css : {color:'#0000FF','font-size':'1.8em'},
                    height : 4 //Used to position the "Or" in the combined block.
                },
                stimulusMedia : [ //Stimuli content as PIP's media objects
                    {word: posWords[0]},
                    {word: posWords[1]},
                    {word: posWords[2]},
                    {word: posWords[3]},
                    {word: posWords[4]},
                    {word: posWords[5]},
                    {word: posWords[6]},
                    {word: posWords[7]}
                ],
                //Stimulus css
                stimulusCss : {color:'#0000FF','font-size':'2.3em'}
            },
        base_url : {//Where are your images at?
            image : 'https://test-minnojs.atwebpages.com/src/images'
        }
    });
});


