var curDogImg = 1;
var numDogImg = 4;
function nextDog(next) {
	curDogImg += next;
	if (curDogImg < 1) curDogImg += numDogImg;
	if (curDogImg > numDogImg) curDogImg -= numDogImg;
	document.getElementById("dogImg").src="dog" + curDogImg + ".jpg";
};

var dogs = '\
			 <table width=100% height=100% cellspacing=0 cellpadding=0> \
				<tr height=100% align=center> \
				 <td id="dogCell" colspan=2> \
					<img id="dogImg" src="dog1.jpg" width="80%" height="auto"> \
					</img> \
				 </td> \
				</tr> \
				<tr height=30 align=center valign=bottom> \
				 <td> \
					<button style="width:90%; height:100%" onclick="nextDog(1)"><font size=2>Next</font></button> \
				 </td> \
				 <td> \
					<button style="width:90%; height:100%" onclick="nextDog(-1)"><font size=2>Prev</font></button> \
				 </td> \
				</tr> \
			 </table> \
';

var cat = '\
			 <table width=100% height=100% cellspacing=0 cellpadding=0> \
				<tr height=100% align=center> \
				 <td id="catImgCell"> \
					<img id="catImg" src="cat.jpg" width="100%" max-height="auto"> \
					</img> \
				 </td> \
				</tr> \
				<tr height=30 align=center valign=bottom> \
				 <td> \
					<i><font color=\'gray\'>--CAT !!!--</font></i> \
				 </td> \
				</tr> \
			 </table> \
';

var controls = '\
			 <table width=100% height=100% cellspacing=0 cellpadding=2> \
				<tr height=10% align=left valign=top> \
				 <td colspan=2> \
					<input id="customCommand" style="width:100%" placeHolder="Custom Command"></input> \
				 </td> \
				 <td> \
					<button onclick="customCommand(document.geteleById(\'customCommand\').value);">enter</button> \
				 </td> \
				</tr> \
				<tr height=30% align=center valign=center> \
				 <td width=33%> \
					<button style="width:100%; height:100%;" onclick="setRobotMessage(\'l45\');"><font size=5>45 Left</font></button> \
				 </td> \
				 <td width=33%> \
					<button style="width:100%; height:100%; background-color:green;" onclick="setRobotMessage(\'u\');"><font size=7>&uarr;</font></button> \
				 </td> \
				 <td width=33%> \
					<button style="width:100%; height:100%;" onclick="setRobotMessage(\'r45\');"><font size=5>45 Right</font></button> \
				 </td> \
				 <td rowspan=3> \
					<input id="speedGauge" type="range" max="250" min="10" value="130" step="10" style="height:100%; width:25; -webkit-appearance:slider-vertical;"></input> \
				 </td> \
				</tr> \
				<tr height=30% align=center valign=center> \
				 <td> \
					<button style="width:100%; height:100%; background-color:green;" onclick="setRobotMessage(\'l\');"><font size=7>&larr;</font></button> \
				 </td> \
				 <td> \
					<button style="width:100%; height:100%; background-color:red;" onclick="setRobotMessage(\'s\');"><font size=5>Stop</font></button> \
				 </td> \
				 <td> \
					<button style="width:100%; height:100%; background-color:green;" onclick="setRobotMessage(\'r\');"><font size=7>&rarr;</font></button> \
				 </td> \
				</tr> \
				<tr height=30% align=center valign=center> \
				 <td> \
					<button style="width:100%; height:100%;" onclick="setRobotMessage(\'p\');"><font size=5>Take Picture</font></button> \
				 </td> \
				 <td> \
					<button style="width:100%; height:100%; background-color:green;" onclick="setRobotMessage(\'d\');"><font size=7>&darr;</font></button> \
				 </td> \
				 <td> \
					<button style="width:100%; height:100%;" onclick="setRobotMessage(\'ps\');"><font size=5>Toggle Picture Stream</font></button> \
				 </td> \
				</tr> \
			 </table> \
';

var story = '\
			 <table width=100% height=100% cellspacing=0 cellpadding=0> \
			 <tr heignt=100%> \
				 <td colspan=2> \
					 <div style="width:100%; height:100%; overflow-y:auto;"> \
						Rome (/ro?m/ rohm; Italian: Roma [ro?ma] ( listen), Latin: Roma) is a city and special comune (named Roma Capitale) in Italy. Rome is the capital of Italy and of the Lazio region. With 2.9 million residents in 1,285 km2 (496.1 sq mi), it is also the countrys largest and most populated comune and fourth-most populous city in the European Union by population within city limits. The Metropolitan City of Rome has a population of 4.3 million residents.[2] The city is located in the central-western portion of the Italian Peninsula, within Lazio (Latium), along the shores of Tiber river. The Vatican City is an independent country geographically located within the city boundaries of Rome, the only existing example of a country within a city: for this reason Rome has been often defined as capital of two states.[3][4]\
\
						Romes history spans more than two and a half thousand years. While Roman mythology dates the founding of Rome at only around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.[5] The citys early population originated from a mix of Latins, Etruscans and Sabines. Eventually, the city successively became the capital of the Roman Kingdom, the Roman Republic and the Roman Empire, and is regarded as one of the birthplaces of Western civilization and by some as the first ever metropolis.[6] It is referred to as Roma Aeterna (The Eternal City) [7] and Caput Mundi (Capital of the World), two central notions in ancient Roman culture.\
\
						After the fall of the Western Empire, which marked the beginning of the Middle Ages, Rome slowly fell under the political control of the Papacy, which had settled in the city since the 1st century AD, until in the 8th century it became the capital of the Papal States, which lasted until 1870.\
\
						Beginning with the Renaissance, almost all the popes since Nicholas V (1422–55) pursued coherently along four hundred years an architectonic and urbanistic program aimed to make of the city the worlds artistic and cultural center.[8] Due to that, Rome became first one of the major centers of the Italian Renaissance,[9] and then the birthplace of both the Baroque style and Neoclassicism. Famous artists, painters, sculptors and architects made Rome the center of their activity, creating masterpieces throughout the city. In 1871 Rome became the capital of the Kingdom of Italy, and in 1946 that of the Italian Republic.\
\
						Rome has the status of a global city.[10][11][12] Rome ranked in 2014 as the 14th-most-visited city in the world, 3rd most visited in the European Union, and the most popular tourist attraction in Italy.[13] Its historic centre is listed by UNESCO as a World Heritage Site.[14] Monuments and museums such as the Vatican Museums and the Colosseum are among the worlds most visited tourist destinations with both locations receiving millions of tourists a year. Rome hosted the 1960 Summer Olympics and is the seat of United Nations Food and Agriculture Organization (FAO).\
						\
						source https://en.wikipedia.org/wiki/Rome\
					 </div> \
				 </td> \
				</tr> \
			 </table> \
';

