// These array stores all of the possible values and the weight associated with the value. 

// sadness
var prompt_val_group0 = [
	{
		value: "मुझे दुख नहीं होता",
		value_en: "I do not feel sad",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मुझे बहुत बार दुख होता है।",
		value_en: "I feel sad much of the time.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं हर समय दुखी रहता हूं।",
		value_en: "I am sad all the time.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैं इतना दुखी या दुखी हूं कि मैं इसे बर्दाश्त नहीं कर सकता।",
		value_en: "I am so sad or unhappy that i can't stand it.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// Changes in Sleeping pattern
var prompt_val_group1 = [
	{
		value: "मैंने अपने सोने के तरीके में कोई बदलाव नहीं देखा है",
		value_en: "I have not experienced any change in my sleeping pattern",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं सामान्य से कुछ ज़्यादा या कुछ ज़्यादा सोता हूँ",
		value_en: "I sleep somewhat more or somewhat more than usual",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं सामान्य से कुछ कम सोता हूँ",
		value_en: "I sleep somewhat less than usual",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैं सामान्य से बहुत अधिक सोता हूँ",
		value_en: "I sleep a lot more than usual",
		class: 'btn-default btn-disagree',
		weight: 3
	},
	{
		value: "मैं सामान्य से बहुत कम सोता हूँ",
		value_en: "I sleep a lot less than usual",
		class: 'btn-default btn-disagree',
		weight: 4
	},
	{
		value: "मैं ज्यादातर दिन सोता हूँ",
		value_en: "I sleep most of the day",
		class: 'btn-default btn-disagree',
		weight: 5
	}
]
// Changes in Appetite
var prompt_val_group2 = [
	{
		value: "मैंने अपनी भूख में कोई बदलाव नहीं देखा है",
		value_en: "I have not experienced any change in my appetite",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मेरी भूख सामान्य से कुछ कम है",
		value_en: "My appetite is somewhat less than usual",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मेरी भूख सामान्य से कुछ अधिक है",
		value_en: "My appetite is somewhat greater than usual",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मेरी भूख पहले से बहुत कम है",
		value_en: "My appetite is much less than before",
		class: 'btn-default btn-disagree',
		weight: 3
	},
	{
		value: "मेरी भूख सामान्य से बहुत अधिक है",
		value_en: "My appetite is much greater than usual",
		class: 'btn-default btn-disagree',
		weight: 4
	},
	{
		value: "मुझे बिल्कुल भी भूख नहीं है",
		value_en: "I have no appetite at all",
		class: 'btn-default btn-disagree',
		weight: 5
	}
]
// Pessimism
var prompt_val_group3 = [
	{
		value: "मैं अपने भविष्य को लेकर निराश नहीं हूं।",
		value_en: "I am not discouraged about my future.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं अपने भविष्य के बारे में पहले की तुलना में अधिक निराश महसूस करता हूं।",
		value_en: "I feel more discouraged about my future than I used to be.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मुझे उम्मीद नहीं है कि चीजें मेरे लिए काम करेंगी।",
		value_en: "I do not expect things to work out for me.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मुझे लगता है कि मेरा भविष्य निराशाजनक है और आगे और भी खराब होगा।",
		value_en: "I feel my future is hopeless and will only get worse.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// Past Failure
var prompt_val_group4 = [
	{
		value: "मुझे असफलता नहीं लगती।",
		value_en: "I do not feel like a failure.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मुझे जितना होना चाहिए था, उससे कहीं अधिक मैं असफल हुआ हूं।",
		value_en: "I have failed more than I should have.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "जब मैं पीछे मुड़कर देखता हूं तो मुझे बहुत सी असफलताएं दिखाई देती हैं।",
		value_en: "As I look back, I see a lot of failures.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मुझे लगता है कि मैं एक व्यक्ति के रूप में पूरी तरह से असफल हूं।",
		value_en: "I feel I am a total failure as a person.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// Loss of Pleasure
var prompt_val_group5 = [
	{
		value: "मुझे उन चीजों से उतना ही आनंद मिलता है, जितना मुझे उन चीजों से मिलता है जो मुझे पसंद हैं।",
		value_en: "I get as much pleasure as I ever did from the things I enjoy.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं चीजों का उतना आनंद नहीं लेता जितना मैं करता था।",
		value_en: "I don't enjoy things as much as I used to.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मुझे उन चीजों से बहुत कम आनंद मिलता है जिनका मैं आनंद लेता था।",
		value_en: "I get very little pleasure from the things I used to enjoy.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "जिन चीजों का मैं आनंद लेता था, उनसे मुझे कोई आनंद नहीं मिल सकता।",
		value_en: "I can’t get any pleasure from the things I used to enjoy.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// Guilty Feelings
var prompt_val_group6 = [
	{
		value: "मैं विशेष रूप से दोषी महसूस नहीं करता।",
		value_en: "I don’t feel particularly guilty.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैंने जो कुछ किया है या करना चाहिए था, उसके लिए मैं खुद को दोषी महसूस करता हूं।",
		value_en: "I feel guilty over many things I have done or should have done.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं ज्यादातर समय काफी दोषी महसूस करता हूं।",
		value_en: "I feel quite guilty most of the time.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैं हर समय दोषी महसूस करता हूं।",
		value_en: "I feel guilty all the time.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Punishment Feelings
var prompt_val_group7 = [
	{
		value: "मुझे नहीं लगता कि मुझे दंडित किया जा रहा है।",
		value_en: "I don’t feel I am being punished.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मुझे लगता है कि मुझे दंडित किया जा सकता है।",
		value_en: "I feel I may be punished.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मुझे सजा मिलने की उम्मीद है।",
		value_en: "I expect to be punished.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मुझे लगता है कि मुझे दंडित किया जा रहा है।",
		value_en: "I feel I am being punished.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Self-Dislike
var prompt_val_group8 = [
	{
		value: "मैं अपने बारे में हमेशा की तरह ही महसूस करता हूं।",
		value_en: "I feel the same about myself as ever.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैंने खुद पर भरोसा खो दिया है।",
		value_en: "I have lost confidence in myself.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं अपने आप में निराश हूं।",
		value_en: "I am disappointed in myself.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैं खुद को नापसंद करता हूं।",
		value_en: "I dislike myself.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Self-Criticalness
var prompt_val_group9 = [
	{
		value: "मैं सामान्य से अधिक खुद की आलोचना या दोष नहीं देता।",
		value_en: "I don’t criticize or blame myself more than usual.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं पहले की तुलना में खुद की अधिक आलोचनात्मक हूं।",
		value_en: "I am more critical of myself than I used to be.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं अपने सभी दोषों के लिए खुद की आलोचना करता हूं।",
		value_en: "I criticize myself for all of my faults.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "जो कुछ भी बुरा होता है उसके लिए मैं खुद को दोषी मानता हूं।",
		value_en: "I blame myself for everything bad that happens.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Suicidal Thoughts or wishes
var prompt_val_group10 = [
	{
		value: "मेरे पास खुद को मारने का कोई विचार नहीं है।",
		value_en: "I don’t have any thoughts of killing myself.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मेरे मन में खुद को मारने के विचार हैं, लेकिन मैं उन पर अमल नहीं करूंगा।",
		value_en: "I have thoughts of killing myself, but I would not carry them out.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं खुद को मारना चाहूंगा।",
		value_en: "I would like to kill myself.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "अगर मुझे मौका मिला तो मैं खुद को मारना चाहूंगा।",
		value_en: "I would like to kill myself if I had the chance.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Crying
var prompt_val_group11 = [
	{
		value: "मैं पहले की तुलना में अब नहीं रोता।",
		value_en: "I don’t cry anymore than I used to.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं पहले से ज्यादा रोता हूं।",
		value_en: "I cry more than I used to.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं हर छोटी-छोटी बात पर रोता हूं।",
		value_en: "I cry over every little thing.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैं हर छोटी-छोटी बात पर रोता हूं।",
		value_en: "I feel like crying, but I can’t.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Agitation
var prompt_val_group12 = [
	{
		value: "मैं सामान्य से अधिक बेचैन या घायल नहीं हूं।",
		value_en: "I am no more restless or wound up than usual.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं सामान्य से अधिक बेचैन या घायल महसूस करता हूं।",
		value_en: "I feel more restless or wound up than usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं इतना बेचैन या उत्तेजित हूँ कि स्थिर रहना कठिन है।",
		value_en: "I am so restless or agitated that it’s hard to stay still.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैं इतना बेचैन या उत्तेजित हूँ कि मुझे चलते रहना या कुछ न कुछ करते रहना पड़ता है।",
		value_en: "I am so restless or agitated that I have to keep moving or doing something.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Loss of Interest
var prompt_val_group13 = [
	{
		value: "मैंने अन्य लोगों या गतिविधियों में रुचि नहीं खोई है।",
		value_en: "I have not lost interest in other people or activities.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मुझे पहले की तुलना में अन्य लोगों या चीजों में कम दिलचस्पी है।",
		value_en: "I am less interested in other people or things than before.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैंने अपनी अधिकांश रुचि अन्य लोगों या चीजों में खो दी है।",
		value_en: "I have lost most of my interest in other people or things.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "किसी भी चीज में दिलचस्पी लेना मुश्किल है।",
		value_en: "It’s hard to get interested in anything.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Indecisiveness
var prompt_val_group14 = [
	{
		value: "मैं हमेशा की तरह के बारे में निर्णय लेता हूं।",
		value_en: "I make decisions about as well as ever.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मुझे सामान्य से अधिक निर्णय लेने में कठिनाई होती है।",
		value_en: "I find it more difficult to make decision than usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मुझे पहले की तुलना में निर्णय लेने में बहुत अधिक कठिनाई होती है।",
		value_en: "I have much greater difficulty in making decisions than I used to.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मुझे कोई भी निर्णय लेने में परेशानी होती है।",
		value_en: "I have trouble making any decisions.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Worthlessness
var prompt_val_group15 = [
	{
		value: "मुझे नहीं लगता कि मैं बेकार हूं।",
		value_en: "I do not feel I am worthless.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं खुद को पहले की तरह सार्थक और उपयोगी नहीं मानता।",
		value_en: "I don’t consider myself as worthwhile and useful as I used to.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं अन्य लोगों की तुलना में अधिक बेकार महसूस करता हूँ।",
		value_en: "I feel more worthless as compared to other people.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैं पूरी तरह से बेकार महसूस करता हूँ।",
		value_en: "I feel utterly worthless.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Loss of Energy
var prompt_val_group16 = [
	{
		value: "मेरे पास हमेशा की तरह उतनी ही ऊर्जा है।",
		value_en: "I have as much energy as ever.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मेरे पास पहले की तुलना में कम ऊर्जा है।",
		value_en: "I have less energy than I used to have.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मेरे पास बहुत कुछ करने के लिए पर्याप्त ऊर्जा नहीं है।",
		value_en: "I don’t have enough energy to do very much.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मेरे पास कुछ भी करने के लिए पर्याप्त ऊर्जा नहीं है।",
		value_en: "I don’t have enough energy to do anything.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Irritability
var prompt_val_group17 = [
	{
		value: "मैं सामान्य से अधिक चिड़चिड़ी नहीं हूं।",
		value_en: "I am no more irritable than usual.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं सामान्य से अधिक चिड़चिड़ी हूं।",
		value_en: "I am more irritable than usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं सामान्य से बहुत अधिक चिड़चिड़ी हूं।",
		value_en: "I am much more irritable than usual.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैं हर समय चिड़चिड़ा रहता हूं।",
		value_en: "I am irritable all the time.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Concentration Difficulty
var prompt_val_group18 = [
	{
		value: "मैं हमेशा की तरह ध्यान केंद्रित कर सकता हूं।",
		value_en: "I can concentrate as well as ever.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं हमेशा की तरह एकाग्र नहीं हो पाता।",
		value_en: "I can’t concentrate as well as usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "किसी भी चीज पर ज्यादा देर तक अपना दिमाग लगाना मुश्किल होता है।",
		value_en: "It’s hard to keep my mind on anything for very long.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मुझे लगता है कि मैं किसी भी चीज़ पर ध्यान केंद्रित नहीं कर सकता।",
		value_en: "I find I can’t concentrate on anything.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Tiredness or Fatigue
var prompt_val_group19 = [
	{
		value: "मैं सामान्य से अधिक थका या थका हुआ नहीं हूँ।",
		value_en: "I am no more tired or fatigued than usual.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मैं सामान्य से अधिक आसानी से थक जाता हूँ या अधिक थक जाता हूँ।",
		value_en: "I get more tired or fatigued more easily than usual.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मैं बहुत सारे काम करने के लिए बहुत थका हुआ या थका हुआ हूँ जो मैं करता था।",
		value_en: "I am too tired or fatigued  to do a lot of the things I used to do.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैं उन अधिकांश कामों को करने के लिए बहुत थका हुआ या थका हुआ हूँ जो मैं करता था।",
		value_en: "I am too tired or fatigued  to do most of the things I used to do.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// Loss of Interest in Sex
var prompt_val_group20 = [
	{
		value: "मैंने हाल ही में सेक्स में अपनी रुचि में कोई बदलाव नहीं देखा है।",
		value_en: "I have not noticed any recent change in my interest in sex.",
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: "मुझे पहले की तुलना में सेक्स में कम दिलचस्पी है।",
		value_en: "I am less interested in sex than I used to be.",
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: "मुझे अब सेक्स में बहुत कम दिलचस्पी है।",
		value_en: "I am much less interested in sex now.",
		class: 'btn-default',
		weight: 2
	},
	{
		value: "मैंने पूरी तरह से सेक्स में रुचि खो दी है।",
		value_en: "I have lost interest in sex completely.",
		class: 'btn-default btn-disagree',
		weight: 3
	}
]
// This is an array of objects that stores the BDI questions that is prompted to the user and the weight for each prompt. 



var prompts = [
	{
		prompt: 'उदासी',
		weight: 1,
		class: 'group0',
		values: prompt_val_group0
	},
	{
		prompt: 'सोने का तरीका में बदलाव',
		weight: 1,
		class: 'group1',
		values: prompt_val_group1
	},
	{
		prompt: 'भूख में परिवर्तन',
		weight: 1,
		class: 'group2',
		values: prompt_val_group2
	},
	{
		prompt: 'निराशावाद',
		weight: 1,
		class: 'group3',
		values: prompt_val_group3
	},
	{
		prompt: 'पिछली विफलता',
		weight: 1,
		class: 'group4',
		values: prompt_val_group4
	},
	{
		prompt: 'आनंद की हानि',
		weight: 1,
		class: 'group5',
		values: prompt_val_group5
	},
	{
		prompt: 'दोषी भावनाएं',
		weight: 1,
		class: 'group6',
		values: prompt_val_group6
	},
	{
		prompt: 'सजा की भावना',
		weight: 1,
		class: 'group7',
		values: prompt_val_group7
	},
	{
		prompt: 'स्वयं नापसंद',
		weight: 1,
		class: 'group8',
		values: prompt_val_group8
	},
	{
		prompt: 'आत्म-आलोचनात्मकता',
		weight: 1,
		class: 'group9',
		values: prompt_val_group9
	},
	{
		prompt: 'आत्मघाती विचार या इच्छाएं',
		weight: 1,
		class: 'group10',
		values: prompt_val_group10
	},
	{
		prompt: 'रोना',
		weight: 1,
		class: 'group11',
		values: prompt_val_group11
	},
	{
		prompt: 'व्याकुलता',
		weight: 1,
		class: 'group12',
		values: prompt_val_group12
	},
	{
		prompt: 'दिलचस्पी की हानि',
		weight: 1,
		class: 'group13',
		values: prompt_val_group13
	},
	{
		prompt: 'अनिश्चितता',
		weight: 1,
		class: 'group14',
		values: prompt_val_group14
	},
	{
		prompt: 'नाकाबिल',
		weight: 1,
		class: 'group15',
		values: prompt_val_group15
	},
	{
		prompt: 'ताकत की हानि',
		weight: 1,
		class: 'group16',
		values: prompt_val_group16
	},
	{
		prompt: 'चिड़चिड़ापन',
		weight: 1,
		class: 'group17',
		values: prompt_val_group17
	},
	{
		prompt: 'एकाग्रता कठिनाई',
		weight: 1,
		class: 'group18',
		values: prompt_val_group18
	},
	{
		prompt: 'थकान या थकान',
		weight: 1,
		class: 'group19',
		values: prompt_val_group19
	},
	{
		prompt: 'सेक्स में रुचि नहीं',
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
        symptomSeverity: "न्यूनतम अवसाद",
        Comments: "0-9 रेंज में स्कोर <b>न्यूनतम डिप्रेशन</b> के स्तर का संकेत देते हैं।",
		symptomSeverity_en: "",
		Comments_en: "Scores in the 0-9 range are indicative of <b>minimal depression</b> levels."
	},
	{
		lowerBound: 10,
		upperBound: 18,
        symptomSeverity: "हल्का तनाव",
        Comments: "10-18 रेंज में स्कोर <b>हल्के अवसाद</b> के स्तर का संकेत देते हैं।",
		symptomSeverity_en: "Mild depression",
		Comments_en: "Scores in the 10-18 range are indicative of <b>mild depression</b> levels."
	},
	{
		lowerBound: 19,
		upperBound: 29,
        symptomSeverity: "मध्यम अवसाद",
        Comments: "19-29 की रेंज में स्कोर <b>मध्यम अवसाद</b> के स्तर का संकेत देते हैं।",
		symptomSeverity_en: "Moderate depression",
		Comments_en: "Scores in the 19-29 range are indicative of <b>moderate depression</b> levels."
	},
	{
		lowerBound: 30,
		upperBound: 67, //63
        symptomSeverity: "अत्यधिक तनाव",
        Comments: "30+ की सीमा में स्कोर <b>गंभीर अवसाद</b> के स्तर का संकेत देते हैं।",
		symptomSeverity_en: "Severe depression",
		Comments_en: "Scores in the 30+ range are indicative of <b>severe depression</b> levels."
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

	document.getElementById('results').innerHTML = 'आपका BDI स्कोर है : <b>' + total + '</b><br>' + Comments;

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
