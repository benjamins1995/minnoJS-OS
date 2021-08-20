define(['questAPI'], function(Quest){
	var API = new Quest();

	// This is just a trick you can use in order to simplify the use of images;
	// set the baseUrl into your current object, and use templates in order to inject them into your questions.
	API.addCurrent({
		baseURL: "src/images/"
	});

	// ### Questions
	// Create the general structure of our questions
	API.addQuestionsSet('basicSelect', {
		type: 'selectOne',
		autoSubmit:true,
		numericValues:true,
		help: '<%= pagesMeta.number < 8 %>',
		helpText:  '<br/>בחירת תשובה פעם אחת צובעת אותה בכחול.<br/>'+
			'באפשרותך לשנות את תשובתך על ידי בחירה באפשרות אחרת.<br/>' +
			'כדי לאשר, לחץ על הלחצן שנבחר (כחול) בפעם השנייה.'
	});

	// ### Pages
	// Create the generic pages template:
	// * `decline`: allow participants to decline answering
	// * `noSubmit`: do not display the submit button (we rely on `autoSubmit` for submitting)
	API.addPagesSet('basicPage', {
		progressBar: '<%= pagesMeta.number %> מתוך 8',
		headerStyle : {'font-size':'1.2em'},
		decline:true,
		// noSubmit:true

	});

	// ### Sequence
	// We put the questions together within the sequence here.
	// The stem here includes an image. It uses plain html, but this is a template you can definitely use yourself.
	// Note that we use a template to set the baseUrl for the images, this is useful so that you can easily change the location of you images.
	API.addSequence(
	[
		{
			mixer : 'random',
			data :[
				{//1
					inherit: 'basicPage',
					header: 'האם האדם המופיע בתמונה זה האדם בסרטון?',
					questions:[{
						inherit: 'basicSelect',
						required: true,
						autoSubmit: false,
						help : false,
						name: 'people1',
						stem :  '<h4>הבט היטב</h4><img height="300px" width="300px" class="img-responsive" src="<%=current.baseURL%>people1.jpg">',
						minWidth: '5%',
						answers: ['לא','כן'],
					},{
						inherit: 'basicSelect',
						required: true,
						autoSubmit: true,
						name: 'people11',
						stem :  'עד כמה אתה בטוח?',
						minWidth: '12%',
						answers: ['לא בטוח בכלל', '1', '2', '3', '4', '5', 'בטוח מאוד'],
					}]
				},

				{//2
					inherit: 'basicPage',
					header: 'האם האדם המופיע בתמונה זה האדם בסרטון?',
					questions:[{
						inherit: 'basicSelect',
						required: true,
						autoSubmit: false,
						help : false,
						name: 'people2',
						stem :  '<h4>הבט היטב</h4><img height="300px" width="300px" class="img-responsive" src="<%=current.baseURL%>people2.jpg">',
						minWidth: '5%',
						answers: ['לא','כן'],
					},{
						inherit: 'basicSelect',
						name: 'people22',
						required: true,
						autoSubmit: true,
						stem :  'עד כמה אתה בטוח?',
						minWidth: '12%',
						answers: ['לא בטוח בכלל', '1', '2', '3', '4', '5', 'בטוח מאוד'],

					}]
				},
				{//3
					inherit: 'basicPage',
					header: 'האם האדם המופיע בתמונה זה האדם בסרטון?',
					questions:[{
						inherit: 'basicSelect',
						required: true,
						help : false,
						autoSubmit: false,
						name: 'people3',
						stem :  '<h4>הבט היטב</h4><img height="300px" width="300px" class="img-responsive" src="<%=current.baseURL%>people3.jpg">',
						minWidth: '5%',
						answers: ['לא','כן'],
					},{
						inherit: 'basicSelect',
						name: 'people33',
						required: true,
						autoSubmit: true,
						stem :  'עד כמה אתה בטוח?',
						minWidth: '12%',
						answers: ['לא בטוח בכלל', '1', '2', '3', '4', '5', 'בטוח מאוד'],
					}]
				},
				{//4
					inherit: 'basicPage',
					header: 'האם האדם המופיע בתמונה זה האדם בסרטון?',
					questions:[{
						inherit: 'basicSelect',
						required: true,
						autoSubmit: false,
						help : false,
						name: 'people4',
						stem :  '<h4>הבט היטב</h4><img height="300px" width="300px" class="img-responsive" src="<%=current.baseURL%>people4.jpg">',
						minWidth: '5%',
						answers: ['לא','כן'],
					},{
						inherit: 'basicSelect',
						name: 'people44',
						required: true,
						autoSubmit: true,
						stem :  'עד כמה אתה בטוח?',
						minWidth: '12%',
						answers: ['לא בטוח בכלל', '1', '2', '3', '4', '5', 'בטוח מאוד'],
					}]
				},
				{//5
					inherit: 'basicPage',
					header: 'האם האדם המופיע בתמונה זה האדם בסרטון?',
					questions:[{
						inherit: 'basicSelect',
						required: true,
						autoSubmit: false,
						help : false,
						name: 'people5',
						stem :  '<h4>הבט היטב</h4><img height="300px" width="300px" class="img-responsive" src="<%=current.baseURL%>people5.jpg">',
						minWidth: '5%',
						answers: ['לא','כן'],
					},{
						inherit: 'basicSelect',
						name: 'people55',
						required: true,
						autoSubmit: true,
						stem :  'עד כמה אתה בטוח?',
						minWidth: '12%',
						answers: ['לא בטוח בכלל', '1', '2', '3', '4', '5', 'בטוח מאוד'],
					}]
				},
				{//6
					inherit: 'basicPage',
					header: 'האם האדם המופיע בתמונה זה האדם בסרטון?',
					questions:[{
						inherit: 'basicSelect',
						required: true,
						autoSubmit: false,
						help : false,
						name: 'people6',
						stem :  '<h4>הבט היטב</h4><img height="300px" width="300px" class="img-responsive" src="<%=current.baseURL%>people6.jpg">',
						minWidth: '5%',
						answers: ['לא','כן'],
					},{
						inherit: 'basicSelect',
						name: 'people66',
						required: true,
						autoSubmit: true,
						stem :  'עד כמה אתה בטוח?',
						minWidth: '12%',
						answers: ['לא בטוח בכלל', '1', '2', '3', '4', '5', 'בטוח מאוד'],
					}]
				},
				{//7
					inherit: 'basicPage',
					header: 'האם האדם המופיע בתמונה זה האדם בסרטון?',
					questions:[{
						inherit: 'basicSelect',
						required: true,
						autoSubmit: false,
						help : false,
						name: 'people7',
						stem :  '<h4>הבט היטב</h4><img height="300px" width="300px" class="img-responsive" src="<%=current.baseURL%>people7.jpg">',
						minWidth: '5%',
						answers: ['לא','כן'],
					},{
						inherit: 'basicSelect',
						name: 'people77',
						required: true,
						autoSubmit: true,
						stem :  'עד כמה אתה בטוח?',
						minWidth: '12%',
						answers: ['לא בטוח בכלל', '1', '2', '3', '4', '5', 'בטוח מאוד'],
					}]
				},
				{//8
					inherit: 'basicPage',
					header: 'האם האדם המופיע בתמונה זה האדם בסרטון?',
					questions:[{
						inherit: 'basicSelect',
						required: true,
						autoSubmit: false,
						help : false,
						name: 'people8',
						stem :  '<h4>הבט היטב</h4><img height="300px" width="300px" class="img-responsive" src="<%=current.baseURL%>people8.jpg">',
						minWidth: '5%',
						answers: ['לא','כן'],
					},{
						inherit: 'basicSelect',
						name: 'people88',
						required: true,
						autoSubmit: true,
						stem :  'עד כמה אתה בטוח?',
						minWidth: '12%',
						answers: ['לא בטוח בכלל', '1', '2', '3', '4', '5', 'בטוח מאוד'],
					}]
				},

			]
		}
	]);
	console.log(window.piGlobal);
	// API.addSettings(`onEnd`, function(){
	// 	console.log(API.getCurrent().logs);
	// 	redirect: 'amp.js'
	// });
	// Return the script to piquest's god, or something of that sort.
	return API.script;
});