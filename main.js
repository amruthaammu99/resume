// function loadjson(file,callback){
// 	var xhr= new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadyStateChange = function(){
// 		if(xhr.readyState===4 && xhr.status == "200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// xhr.send(null);
// var data = JSON.parse(text);}
// loadjson("daat.json",function(text){
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	education(data.education);
// 	technicalinfo(data.technicalskills);
// 	acheivements(data.acheive);
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
	education(data.education);
	technicalinfo(data.technicalskills);
	acheivements(data.acheive);	
})
var left = document.querySelector(".left");
function basics(det){
	var img = document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
	var name1 = document.createElement("h3");
	name1.textContent = det.name;
	left.appendChild(name1);
	var phno = document.createElement("h3");
	phno.textContent = det.number;
	left.appendChild(phno);
	var email = document.createElement("a");
	email.href = "mailto:amruthajampani@gmail.com";
	email.textContent = det.email;
	left.appendChild(email);
	var add = document.createElement("h2");
	add.textContent = "address";
	left.appendChild(add);
	var add1 = document.createElement("hr");
	left.appendChild(add1);
	var add2 = document.createElement("p");
	add2.textContent = det.address;
	left.appendChild(add2);
}
var right = document.querySelector(".right");
function careerinfo(info){
	var career = document.createElement("h2");
	career.textContent = "Career Objective";
	right.appendChild(career);
	var career1 = document.createElement("hr");
	right.appendChild(career1);
	var info1 = document.createElement("p");
	info1.textContent = info.info;
	right.appendChild(info1);
}
function education(edu){
	var edu1 = document.createElement("h2");
	edu1.textContent = "Educational Qualification";
	right.appendChild(edu1);
	var edu2 = document.createElement("hr");
	right.appendChild(edu2);
	var table1 = document.createElement("table");
	table1.border = "2";
	right.appendChild(table1);
	tabledata = "";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";

	}
	table1.innerHTML = tabledata;
}
function technicalinfo(skill){
	var tech1 = document.createElement("h2");
	tech1.textContent = "technicalskills";
	right.appendChild(tech1);
	var tech2 = document.createElement("hr");
	right.appendChild(tech2);
	for(i=0;i<skill.length;i++){
		var s = document.createElement("h3");
		s.textContent = skill[i].title;
		right.appendChild(s);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}

}
function acheivements(acheive){
	var ach1 = document.createElement("h2");
	ach1.textContent = "acheivements";
	right.appendChild(ach1);
	var ach2 = document.createElement("hr");
	right.appendChild(ach2);
	for(i=0;i<acheive.length;i++){
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = acheive[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function openpage(){
	window.open("resume.html","_self",true)
}