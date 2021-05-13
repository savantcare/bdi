// These array stores all of the possible values and the weight associated with the value. 

// sadness
var prompt_val_group0 = [
	{
		value: "I do not feel sad",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I feel sad much of the time.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I am sad all the time.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I am so sad or unhappy that i can't stand it.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// Changes in Sleeping pattern
var prompt_val_group1 = [
	{
		value: "I have not experienced any change in my sleeping pattern",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I sleep somewhat more or somewhat more than usual",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I sleep somewhat less than usual",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I sleep a lot more than usual",
		class: 'btn-default btn-disagree',
		weight: 3
	},
	{
		value: "I sleep a lot less than usual",
		class: 'btn-default btn-disagree',
		weight: 4
	},
	{
		value: "I sleep most of the day",
		class: 'btn-default btn-disagree',
		weight: 5
	}
]
// Changes in Appetite
var prompt_val_group2 = [
	{
		value: "I have not experienced any change in my appetite",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "My appetite is somewhat less than usual",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "My appetite is somewhat greater than usual",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "My appetite is much less than before",
		class: 'btn-default btn-disagree',
		weight: 3
	},
	{
		value: "My appetite is much greater than usual",
		class: 'btn-default btn-disagree',
		weight: 4
	},
	{
		value: "I have no appetite at all",
		class: 'btn-default btn-disagree',
		weight: 5
	}
]
// Pessimism
var prompt_val_group3 = [
	{
		value: "I am not discouraged about my future.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I feel more discouraged about my future than I used to be.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I do not expect things to work out for me.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I feel my future is hopeless and will only get worse.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// Past Failure
var prompt_val_group4 = [
	{
		value: "I do not feel like a failure.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I have failed more than I should have.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "As I look back, I see a lot of failures.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I feel I am a total failure as a person.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// Loss of Pleasure
var prompt_val_group5 = [
	{
		value: "I get as much pleasure as I ever did from the things I enjoy.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I don't enjoy things as much as I used to.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I get very little pleasure from the things I used to enjoy.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I can’t get any pleasure from the things I used to enjoy.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// Guilty Feelings
var prompt_val_group6 = [
	{
		value: "I don’t feel particularly guilty.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I feel guilty over many things I have done or should have done.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I feel quite guilty most of the time.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I feel guilty all the time.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Punishment Feelings
var prompt_val_group7 = [
	{
		value: "I don’t feel I am being punished.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I feel I may be punished.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I expect to be punished.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I feel I am being punished.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Self-Dislike
var prompt_val_group8 = [
	{
		value: "I feel the same about myself as ever.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I have lost confidence in myself.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I am disappointed in myself.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I dislike myself.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Self-Criticalness
var prompt_val_group9 = [
	{
		value: "I don’t criticize or blame myself more than usual.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I am more critical of myself than I used to be.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I criticize myself for all of my faults.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I blame myself for everything bad that happens.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Suicidal Thoughts or wishes
var prompt_val_group10 = [
	{
		value: "I don’t have any thoughts of killing myself.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I have thoughts of killing myself, but I would not carry them out.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I would like to kill myself.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I would like to kill myself if I had the chance.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Crying
var prompt_val_group11 = [
	{
		value: "I don’t cry anymore than I used to.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I cry more than I used to.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I cry over every little thing.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I feel like crying, but I can’t.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Agitation
var prompt_val_group12 = [
	{
		value: "I am no more restless or wound up than usual.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I feel more restless or wound up than usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I am so restless or agitated that it’s hard to stay still.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I am so restless or agitated that I have to keep moving or doing something.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Loss of Interest
var prompt_val_group13 = [
	{
		value: "I have not lost interest in other people or activities.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I am less interested in other people or things than before.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I have lost most of my interest in other people or things.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "It’s hard to get interested in anything.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Indecisiveness
var prompt_val_group14 = [
	{
		value: "I make decisions about as well as ever.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I find it more difficult to make decision than usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I have much greater difficulty in making decisions than I used to.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I have trouble making any decisions.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Worthlessness
var prompt_val_group15 = [
	{
		value: "I do not feel I am worthless.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I don’t consider myself as worthwhile and useful as I used to.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I feel more worthless as compared to other people.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I feel utterly worthless.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Loss of Energy
var prompt_val_group16 = [
	{
		value: "I have as much energy as ever.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I have less energy than I used to have.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I don’t have enough energy to do very much.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I don’t have enough energy to do anything.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Irritability
var prompt_val_group17 = [
	{
		value: "I am no more irritable than usual.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I am more irritable than usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I am much more irritable than usual.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I am irritable all the time.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Concentration Difficulty
var prompt_val_group18 = [
	{
		value: "I can concentrate as well as ever.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I can’t concentrate as well as usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "It’s hard to keep my mind on anything for very long.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I find I can’t concentrate on anything.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Tiredness or Fatigue
var prompt_val_group19 = [
	{
		value: "I am no more tired or fatigued than usual.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I get more tired or fatigued more easily than usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I am too tired or fatigued  to do a lot of the things I used to do.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I am too tired or fatigued  to do most of the things I used to do.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Loss of Interest in Sex
var prompt_val_group20 = [
	{
		value: "I have not noticed any recent change in my interest in sex.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "I am less interested in sex than I used to be.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "I am much less interested in sex now.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "I have lost interest in sex completely.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// This is an array of objects that stores the BDI questions that is prompted to the user and the weight for each prompt. 

var prompts = [
	{
		prompt: 'Sadness',
		weight: 1,
		class: 'group0',
		values: prompt_val_group0
	},
	{
		prompt: 'Changes in Sleeping pattern',
		weight: 1,
		class: 'group1',
		values: prompt_val_group1
	},
	{
		prompt: 'Changes in Appetite',
		weight: 1,
		class: 'group2',
		values: prompt_val_group2
	},
	{
		prompt: 'Pessimism',
		weight: 1,
		class: 'group3',
		values: prompt_val_group3
	},
	{
		prompt: 'Past Failure',
		weight: 1,
		class: 'group4',
		values: prompt_val_group4
	},
	{
		prompt: 'Loss of Pleasure',
		weight: 1,
		class: 'group5',
		values: prompt_val_group5
	},
	{
		prompt: 'Guilty Feelings',
		weight: 1,
		class: 'group6',
		values: prompt_val_group6
	},
	{
		prompt: 'Punishment Feelings',
		weight: 1,
		class: 'group7',
		values: prompt_val_group7
	},
	{
		prompt: 'Self-Dislike',
		weight: 1,
		class: 'group8',
		values: prompt_val_group8
	},
	{
		prompt: 'Self-Criticalness',
		weight: 1,
		class: 'group9',
		values: prompt_val_group9
	},
	{
		prompt: 'Suicidal Thoughts or wishes',
		weight: 1,
		class: 'group10',
		values: prompt_val_group10
	},
	{
		prompt: 'Crying',
		weight: 1,
		class: 'group11',
		values: prompt_val_group11
	},
	{
		prompt: 'Agitation',
		weight: 1,
		class: 'group12',
		values: prompt_val_group12
	},
	{
		prompt: 'Loss of Interest',
		weight: 1,
		class: 'group13',
		values: prompt_val_group13
	},
	{
		prompt: 'Indecisiveness',
		weight: 1,
		class: 'group14',
		values: prompt_val_group14
	},
	{
		prompt: 'Worthlessness',
		weight: 1,
		class: 'group15',
		values: prompt_val_group15
	},
	{
		prompt: 'Loss of Energy',
		weight: 1,
		class: 'group16',
		values: prompt_val_group16
	},
	{
		prompt: 'Irritability',
		weight: 1,
		class: 'group17',
		values: prompt_val_group17
	},
	{
		prompt: 'Concentration Difficulty',
		weight: 1,
		class: 'group18',
		values: prompt_val_group18
	},
	{
		prompt: 'Tiredness or Fatigue',
		weight: 1,
		class: 'group19',
		values: prompt_val_group19
	},
	{
		prompt: 'Loss of Interest in Sex',
		weight: 1,
		class: 'group20',
		values: prompt_val_group20
	}

]

/* ref: https://en.wikipedia.org/wiki/Beck_Depression_Inventory#BDI
0–9: indicates minimal depression
10–18: indicates mild depression
19–29: indicates moderate depression
30–63: indicates severe depression.
*/
var score_summary = [
	{
		lowerBound: 0,
		upperBound: 9,
		symptomSeverity: "Minimal depression",
		Comments: "Scores in the 0-9 range are indicative of <b>minimal depression</b> levels."
	},
	{
		lowerBound: 10,
		upperBound: 18,
		symptomSeverity: "Mild depression",
		Comments: "Scores in the 10-18 range are indicative of <b>mild depression</b> levels."
	},
	{
		lowerBound: 19,
		upperBound: 29,
		symptomSeverity: "Moderate depression",
		Comments: "Scores in the 19-29 range are indicative of <b>mpderate depression</b> levels."
	},
	{
		lowerBound: 30,
		upperBound: 67, //63
		symptomSeverity: "Severe depression",
		Comments: "Scores in the 30+ range are indicative of <b>severe depression</b> levels."
	}
]

// each list structure is going to be as follows.
/*
<li class="list-group-item prompt">
	<p class="font-size-20">Q3) sadness</p>
	<div class="row">
		<div class="col-md-12">
			<div class="radio">
					<label class="group0 radio-value-btn"><input type="radio" name="group0">I do not feel sad</label>
			</div>
			...
		</div>
	</div>
</li>
*/
// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode('Q' + (i + 1) + ') ' + prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.setAttribute('class', 'font-size-20');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('screening').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the screening
function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group_wrapper = document.createElement('div');
		group_wrapper.className = 'row';
		var group = document.createElement('div');
		group.className = 'col-md-12';
		//console.log(group_wrapper);
		var prompt_values = prompts[li_index].values;
		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'radio';

			var radio_label = document.createElement('label');
			radio_label.className = 'group' + li_index + ' radio-value-btn'; // ' value-btn btn ' + prompt_values[i].class + ' width100';


			var radioInput = document.createElement('input');
			radioInput.setAttribute('type', 'radio');
			radioInput.setAttribute('name', 'group' + li_index);

			radio_label.appendChild(radioInput);
			var radio_label_text = document.createTextNode(prompt_values[i].value);
			radio_label.appendChild(radio_label_text);

			btn_group.appendChild(radio_label);
			group.appendChild(btn_group);
			group_wrapper.appendChild(group);
			document.getElementsByClassName('prompt')[li_index].appendChild(group_wrapper);
		}
	}
}

createPromptItems();
createValueButtons();

// Keep a running total of the values they have selected. 
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var total = 0;
var emailSubject = 'BDI Score.';
var emailBody = '';

// Get the weight associated to group number
function findPromptWeight(prompts, group) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			weight = prompts[i].weight;
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}

function findValueSet(groupName) {
	var groupArr = groupName.trim().split("group");
	var prompt_index = groupArr[1];
	var prompt_values = prompts[prompt_index].values;
	return prompt_values;
}


$('.radio-value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	var classArr = classList.split(" ");
	var this_group = classArr[0];
	var prompt_values = findValueSet(this_group);

	if ($(this).hasClass('active')) {
		// doing nothing, since it is a case of clcking on already checked radio button 
	} else {
		total -= findValueWeight(prompt_values, $('.' + this_group + '.active').text());
		$('.' + this_group).removeClass('active');
		$(this).addClass('active');
		total += findValueWeight(prompt_values, $(this).text());
	}
	console.warn(total);
})



$('#submit-btn').click(function () {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');

	var symptomSeverity = '';
	var Comments = '';

	for (var i = 0; i < score_summary.length; i++) {
		if (score_summary[i].lowerBound <= total && total <= score_summary[i].upperBound) {
			symptomSeverity = score_summary[i].symptomSeverity;
			Comments = score_summary[i].Comments;
			break;
		}
	}

	//document.getElementById('results').innerHTML = 'Your score is : ' + total + '<br><b>' + symptomSeverity + '</b><br><br>' + Comments;

	//emailBody = `Hi,\nRecently I have tested my Depression level in https://www.savantcare.com/bdi/ .\nMy depression score is '${total}' and level is: '${$.trim(symptomSeverity)}'.
	//`;

	document.getElementById('results').innerHTML = 'Your BDI score is : <b>' + total + '</b><br>' + Comments;

	emailBody = `Hi,\nRecently I have tested my BDI score in https://www.savantcare.com/bdi/ .\nMy BDI score is '${total}' and it indicates '${symptomSeverity}' level.
	`;

	// Hide the screening after they submit their results
	$('#screeningHeader').addClass('hide');
	$('#screening').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
	$('#share-by-email').removeClass('hide');
})

// Refresh the screen to show a new screening if they click the retake screening button
$('#retake-btn').click(function () {
	$('#screeningHeader').removeClass('hide');
	$('#screening').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');
	$('#share-by-email').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})

// Share score via email
function getMailtoUrl(to, subject, body) {
	if (typeof to === 'undefined' || to == '') return false;
	var args = [];
	if (typeof subject !== 'undefined') {
		args.push('subject=' + encodeURIComponent(subject));
	}
	if (typeof body !== 'undefined') {
		args.push('body=' + encodeURIComponent(body))
	}

	var url = 'mailto:' + encodeURIComponent(to);
	if (args.length > 0) {
		url += '?' + args.join('&');
	}
	return url;
}

$('#share-score-btn').click(function () {
	var to = $.trim($('#email').val());
	var body;
	var mailtoString = getMailtoUrl(to, emailSubject, emailBody);
	//console.log(emailBody);
	if (mailtoString !== false)
		window.open(mailtoString);
})