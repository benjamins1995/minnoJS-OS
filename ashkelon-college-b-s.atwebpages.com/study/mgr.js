define(['managerAPI'], function(Manager){

	// This code is responsible for styling the miQuest tasks as panels (like piMessage)
	// Don't touch unless you know what you're doing
	var css = '[pi-quest]{background-color: #fff;border: 1px solid transparent;border-radius: 4px;box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);margin-bottom: 20px;border-color: #bce8f1;padding:15px;}';
	window.angular.element(document).find('head').prepend('<style type="text/css">' + css + '</style>');

		var API = new Manager();
		API.setName('mgr');
		API.addSettings('skip', true);
		API.addSettings('DEBUG', {level: 'error'});

		API.addSettings('logger',{type:'csv', url:'csv.php'});

		// Set a global flag that we can test against
		//API.addGlobal({longOrShort});


		//קובץ זה, mgr בעצם הוא קובץ מסוג js, יחיד במחקר פעיל והוא מנהל את כולו
	   // העמוד כולו מלווה בהסברים בעברית

		/**********
		 ***Define all the tasks in advance.
		 **********/
		API.addTasksSet({

			// סוג משימה כללי שהגדרתי בשביל תבניות כדי שירשו ממנו, במקום לרשום כמה פעמים
			instructions: [{
				type: 'message',
				piTemplate: true,
				buttonText: 'Continue'
			}],

			//טופס הסכמה מדעת
			consent: [{
				inherit: 'instructions',
				name: 'consent',
				title: 'מחקר - מעבדה פרנזית - טופס הסכמה מדעת',
				header: 'טופס הסכמה מדעת',
				templateUrl: 'consent.jst',
			}],

			//חוצץ בין סרטון לעמודי התמונות
			instimages: [{
				inherit: 'instructions',
				name: 'instimages',
				title: 'מחקר - מעבדה פרנזית',
				templateUrl: 'instimages.jst',
				header: 'זיהוי לאחר סרטון'
			}],

			//חוצץ בין חלק ראשון של המחקר לחלק השני
			instiat: [{
				inherit: 'instructions',
				name: 'instiat',
				templateUrl: 'instiat_weight.jst',
				title: 'מחקר - מעבדה פרנזית - מבחן אסוציאציות חבויות',
				header: 'מבחן אסוציאציות חבויות'
			}],

  		  	 //   IAT של אנשים רזים מול אנשים שמנים
			socioWeightIAT : [{
				type: 'time',
				title: 'מחקר - מעבדה פרנזית - מבחן אסוציאציות חבויות',
				name : 'weightIat',
				scriptUrl: 'socioWeightIAT.js'

			}],

			//עמוד שאלות ראשי
			selectq: [{
				type: 'quest',
				title: 'מחקר - מעבדה פרנזית - אישור השתתפות',
				name: 'selectq',
				scriptUrl: 'selectq.js'
			}],

			//עמוד שאלות ראשי
			socioQuestionsMain: [{
				type: 'quest',
				title: 'מחקר - מעבדה פרנזית - שאלון ראשי',
				name: 'socioQuestionsMain',
				scriptUrl: 'socioQuestionsMain.js'
			}],

			//עמודי דירוג התמונות על פי הסרטון זיהוי
			socioRateImagesSizes: [{
				type: 'quest',
				title: 'מחקר - מעבדה פרנזית - דירוג תמונות',
				name: 'socioRateImagesSizes',
				scriptUrl: 'socioRateImagesSizes.js',
			}],

			// עמוד אחרון
			lastpage: [{
				inherit: 'instructions',
				name: 'lastpage',
				templateUrl: 'lastpage.jst',
				title: 'מחקר - מעבדה פרנזית - סוף',
				last: true,
				header: 'סיימת את המחקר',
			}]

		});


		API.addSequence([

			         //ברצף הכול מתנהל
			        //נתחיל עם עמוד consent ראשוני כדי לקבל הסכמה
			       //
		         	{inherit: 'consent'},
			     //
			    //עמוד selectq, זהו עמוד js בחירה האם להמשיך במחקר רגיל או לדלג לשאלון בסוף
			   //קיימת אפשרות גם , ללא שימוש בעמוד js בעזרת yesNo פונ' שקיימת */
			  //*/ אך שם יש בעיה שהערך מאוחסן בגלובל ולכן ניתן למשוך אותו בעזרת תבנית , אבל תבניות לא עובדות במיקסרים (סדר קדמויות)
			 // https://minnojs.github.io/minno-quest/0.3/manager/yesno.html קישור
			//
			  {inherit: 'selectq'},
		  //
		 // נקבל מ selectq בתגובה ערך חזרה ונעשה השוואה מול הערך noText || yesText
	{
	   //
		mixer: 'multiBranch',
		branches: [
			{
				conditions: [{
					compare: 'global.selectq.questions.longOrShort.response',
					to: 'yesText'
				}],
				data: [
              // //במקום לרשת כמו כולם את הקובץ js בשורה אחת, הוידאו חייב להיות בקובץ של manger לא quest רגיל, ויכול להיות רק מנהל אחד אז שילבתי את הקוד פה//
			 // // כמה שזה מכוער, זה הכרחי! (למיטב הבנתי)...
			{
				type: 'message',
				name: 'socioVideoStart',
				title: 'מחקר - מעבדה פרנזית - סרטון הסבר',


				// ### Show video and defer proceed
					// now we use a trick to defer the presentation of the proceed button until the video completes
					data: {
						 // The video url (as mp4!)
						//כתובת של התקייה שהסרטון נמצא בה
						videoUrl: 'src/videos/IdentificationVideo.mp4',
						 // An image to use as a poster until the video plays
						//כתובת לתמונה - לא חובה - הצגת תמונה עד הפעלת הסרטון
						imageUrl: ''
					},

					// בעצם בעזרת התבנית אנחנו משלבים קוד html בתוך שורות הjs
				// We create the video template itself
					template: [
						'<style type="text/css">.pi-spinner {\n  display: none;\n } </style>',
						'<div id="backVideo" class="text-center">',
						'<h4 class="text-right">שלום רב, נבחרתם להשתתף בניסוי לזיהוי חשוד לאחר צפייה בסרטון. <br/>',
						'לאחר צפייה בסרטון תתבקשו לענות על מספר שאלות, בהצלחה!',
						'<br/>*חובה</h4>',
						'<br/>',
						' <video controls="controls" autoplay="autoplay" poster="<%= tasksData.imageUrl %>" width="640" height="360" style="margin:auto">',
						'   <source src="<%= tasksData.videoUrl %>" type="video/mp4"/>',
						'   <object type="application/x-shockwave-flash" data="http://flashfox.googlecode.com/svn/trunk/flashfox.swf" width="640" height="360">',
						'     <param name="movie" value="http://flashfox.googlecode.com/svn/trunk/flashfox.swf" />',
						'     <param name="allowFullScreen" value="true" />',
						'     <param name="wmode" value="transparent" />',
						'     <param name="flashVars" value="autoplay=true&controls=true&poster=<%= tasksData.imageUrl %>&src=<%= tasksData.videoUrl %>" />',
						'   </object>',
						' </video>',
						'</div>',
						'<div class="text-center proceed" style="margin: 30px auto 10px;">',
						' <button pi-message-done type="button" class="btn btn-primary">לחץ כאן כדי להמשיך</button>',
						'</div>'
					].join('\n'),


				   // פונ' שמנהלת את כפתור ההמשך - מעלימה אותו פרק זמן מסויים עד לסיום הסרטון, כדי להכריח צפייה
				  // This is where the magic happens. as soon as the page is loaded
				 // We hide The proceed button, and show it only after 60 seconds when the video is supposed to end.
				// (Note that in certain situations the button may be displayed before the video finishes playing. This is because the timing is absolute and not dependant on the video actually finishing)
				load: function () {
					var proceed = document.querySelectorAll('.proceed')[0];
					proceed.style.visibility = 'hidden';
					setTimeout(function () {
						proceed.style.visibility = '';
					}, 1 * 1000); // כמה זמן עד שכפתור 'המשך' יופיע (1000 == שנייה אחת)

					  //*
					 //שורות אלה אחריות על המעבר למסך מלא לאחר סרטון ההסבר
					//
					document.querySelector('[pi-message-done]').addEventListener('click', function(){
						var el = document.documentElement;
						var rfs = el.requestFullscreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
						if (rfs) rfs.call(el);
						else if(window.ActiveXObject){
							// for Internet Explorer
							var wscript = new window.ActiveXObject('WScript.Shell');
							if (wscript!=null) wscript.SendKeys('{F11}');
						}
					});//*
				}
			},// סיום וידאו ראשון (וידאו הסבר)
			 // <------------------------------->
			//*** התחלת סרטון שני (סרטון אלים)
			{
				type: 'message',
				name: 'socioVideoMain',
				title: 'מחקר - מעבדה פרנזית - סרטון ניסוי',


				data: {
					 // The video url (as mp4!)
					//כתובת של התקייה שהסרטון נמצא בה
					videoUrl: 'src/videos/socioVideo.mp4',
					 // An image to use as a poster until the video plays
					//כתובת לתמונה - לא חובה - הצגת תמונה עד הפעלת הסרטון
					imageUrl: ''
				},

				 // We create the video template itself
				// בעצם בעזרת התבנית אנחנו משלבים קוד html בתוך שורות הjs
				template: [
					'<style type="text/css">.pi-spinner {\n  display: none;\n } </style>',
					'<h4>לפניך סרטון המציג סיטואציה בין בני זוג. לאחר צפייה בסרטון תישאל/י על הסרטון כמה שאלות<br/>',
					'לאחר צפייה בסרטון נא ללחוץ המשך, בהצלחה!',
					'<br/>*חובה</h4>',
					'<div id="backVideo" class="text-center">',
					'<br/>',
					' <video controls="controls" autoplay="autoplay" poster="<%= tasksData.imageUrl %>" width="640" height="360" style="margin:auto">',
					'   <source src="<%= tasksData.videoUrl %>" type="video/mp4"/>',
					'   <object type="application/x-shockwave-flash" data="http://flashfox.googlecode.com/svn/trunk/flashfox.swf" width="640" height="360">',
					'     <param name="movie" value="http://flashfox.googlecode.com/svn/trunk/flashfox.swf" />',
					'     <param name="allowFullScreen" value="true" />',
					'     <param name="wmode" value="transparent" />',
					'     <param name="flashVars" value="autoplay=true&controls=true&poster=<%= tasksData.imageUrl %>&src=<%= tasksData.videoUrl %>" />',
					'   </object>',
					' </video>',
					'</div>',
					'<div class="text-center proceed" style="margin: 30px auto 10px;">',
					' <button pi-message-done type="button" class="btn btn-primary">לחץ כאן כדי להמשיך</button>',
					'</div>'
				].join('\n'),

			       // פונ' שמנהלת את כפתור ההמשך - מעלימה אותו פרק זמן מסויים עד לסיום הסרטון, כדי להכריח צפייה
				  // This is where the magic happens. as soon as the page is loaded
				 // We hide The proceed button, and show it only after 60 seconds when the video is supposed to end.
				// (Note that in certain situations the button may be displayed before the video finishes playing. This is because the timing is absolute and not dependant on the video actually finishing)
				load: function () {
					var proceed = document.querySelectorAll('.proceed')[0];
					proceed.style.visibility = 'hidden';
					setTimeout(function () {
						proceed.style.visibility = '';
					}, 1 * 1000); // כמה זמן עד שכפתור 'המשך' יופיע (1000 == שנייה אחת)
				}

			},  //סיום וידאו שני
			   // <------------------------------->
			  //  *** *** *** ==> ניתן לראות איך כולם מוברגים אחד אחר השני בתוך הרצף, החל מהטופס הסכמה עד החלק של המבחן האחרון <== *** *** ***
			 //
			//socioQuestionsMain ==>  מעבר לשאלון מילוי
			{
				inherit: 'socioQuestionsMain'
			},

			//'instimages' ==> חוצץ בין שאלון לבין עמוד דירוג התמונות
			{
				inherit: 'instimages'
			},

			//socioRateImagesSizes ==> עמוד דירוג תמונות על פי הסרטון
			{
				inherit: 'socioRateImagesSizes'
			},
			 //
			// instiat ==> חוצץ בין עמוד הדירוג תמונות לבין חלק ב, המבחן
			{
				inherit: 'instiat'
			},
			 //
			// מבחן אסוציאציות חבויות === socioWeightIAT
			{inherit: 'socioWeightIAT'},

		     // this is needed only if you want to post before the end of the study
			// { type:'postCsv', load: console.log },
			{
				type:'postCsv',
			},

			//*** עמוד אחרון - עדיין בפיתוח (צריך משהו רציני הכולל post לשרת) ***
			{
				inherit: 'lastpage'
			},
			//       //***//
					//נגמר המשימה, כאשר אנו בוחרים במשימה המלאה 15 דקות בערך
		]
	},

		   //מכאן מתחיל החלק השני של המחקר רק מבחן ה iat
		  //	 נעשה השוואה עם התגובה שחוזרת מול הערך noText
	{
		conditions:
			[{
			compare: 'global.selectq.questions.longOrShort.response',
			to: 'noText'
			}],
					data: [
							// instiat ==> עמוד התחלה של מבחן
							{
								inherit: 'instiat'
							},
							//
							// מבחן אסוציאציות חבויות === socioWeightIAT
							{inherit: 'socioWeightIAT'},

							//פרסום לשרת
							{
								type:'postCsv',
							},

							//*** עמוד אחרון ***
							{
								inherit: 'lastpage'
							},
							//       //***//
						]
					},]
			}

		]);



		//הדפסה לקונסול מקומי
		console.log(window.piGlobal);

	return API.script;
}
);














