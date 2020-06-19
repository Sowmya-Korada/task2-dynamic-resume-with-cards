var body= document.getElementById("root");
var main=document.createElement("section");
main.classList.add("parent");
body.appendChild(main);
//card
var card1=document.createElement("article");
card1.setAttribute("class","left");
// console.log(card1);
main.appendChild(card1);
// create image
var div1=document.createElement("div");

      var clg1=document.createElement("h1");
      clg1.textContent="ANDHRA UNIVERSITY";
      div1.appendChild(clg1);
      var image1=document.createElement("img");
      image1.src="images/stu2.jpg";
      image1.alt="profile image";
      div1.appendChild(image1);
    
 card1.appendChild(div1);

   var hr=document.createElement("hr");
   card1.appendChild(hr);

 var div2=document.createElement("div");
      div2.setAttribute("class","leftText");
      var name1=document.createElement("h2");
      name1.textContent="Sowmya Korada";
      div2.appendChild(name1);
      var mail1=document.createElement("p");
      mail1.textContent="MAIL: sowmyakorada@gmail.com";
      div2.appendChild(mail1);
      var name1=document.createElement("p");
      name1.textContent="MOBILE NO: 9xxxxxxxxx";
      div2.appendChild(name1);
      var id1=document.createElement("h4");
      id1.textContent="ID: 318506402043";
      div2.appendChild(id1);
card1.appendChild(div2);

//resume
var resume=document.createElement("article");
resume.setAttribute("class","right");
main.appendChild(resume);
var heading=document.createElement("h1");
heading.textContent="RESUME";
resume.appendChild(heading);
var Objectives=document.createElement("h2");
Objectives.textContent="Objectives"
resume.appendChild(Objectives);
var obj1=document.createElement("p");
obj1.textContent="To work in a challenging enivironment where i can utilize my slills and knowledge to the best of my abilities and contribute positively to my personal growth as well as the organization.";
resume.appendChild(obj1);
//table for Educational Details
  var education=document.createElement("h2");
  education.textContent="Educational Details"
  resume.appendChild(education);
  var tab=document.createElement("table");
  tab.border="2";
        var tr1=document.createElement("tr");
            var th1=document.createElement("th");
            th1.textContent="S.no";
            tr1.appendChild(th1);
            var th2=document.createElement("th");
            th2.textContent="Institute";
            tr1.appendChild(th2);
            var th3=document.createElement("th");
            th3.textContent="Course";
            tr1.appendChild(th3);
            var th4=document.createElement("th");
            th4.textContent="Year of pass";
            tr1.appendChild(th4);
            var th5=document.createElement("th");
            th5.textContent="Percentage";
            tr1.appendChild(th5);
        tab.appendChild(tr1);
        var tr2=document.createElement("tr");
            var td11=document.createElement("td");
            td11.textContent="1";
            tr2.appendChild(td11);
            var td12=document.createElement("td");
            td12.textContent="Andhra University College of Enginering";
            tr2.appendChild(td12);
            var td13=document.createElement("td");
            td13.textContent="B.tech";
            tr2.appendChild(td13);
            var td14=document.createElement("td");
            td14.textContent="2022";
            tr2.appendChild(td14);
            var td15=document.createElement("td");
            td15.textContent="88";
            tr2.appendChild(td15);
          tab.appendChild(tr2)
        var tr3=document.createElement("tr");
            var td21=document.createElement("td");
            td21.textContent="2";
            tr3.appendChild(td21);
            var td22=document.createElement("td");
            td22.textContent="Sri Chaitanya Junior College";
            tr3.appendChild(td22);
            var td23=document.createElement("td");
            td23.textContent="Intermediate";
            tr3.appendChild(td23);
            var td24=document.createElement("td");
            td24.textContent="2018";
            tr3.appendChild(td24);
            var td25=document.createElement("td");
            td25.textContent="97";
            tr3.appendChild(td25);
          tab.appendChild(tr3);
        var tr4=document.createElement("tr");
            var td31=document.createElement("td");
            td31.textContent="3";
            tr4.appendChild(td31);
            var td32=document.createElement("td");
            td32.textContent="De Paul School";
            tr4.appendChild(td32);
            var td33=document.createElement("td");
            td33.textContent="10th";
            tr4.appendChild(td33);
            var td34=document.createElement("td");
            td34.textContent="2016";
            tr4.appendChild(td34);
            var td35=document.createElement("td");
            td35.textContent="88";
            tr4.appendChild(td35);
         tab.appendChild(tr4);
  resume.appendChild(tab);

  //Skills

  var skills=document.createElement("h2");
  skills.textContent="Skills"
  resume.appendChild(skills);
    var ul1=document.createElement("ul");
      var li11=document.createElement("li");
      li11.textContent="C";
      ul1.appendChild(li11);
      var li12=document.createElement("li");
      li12.textContent="C++";
      ul1.appendChild(li12);
      var li13=document.createElement("li");
      li13.textContent="Python";
      ul1.appendChild(li13);
      var li14=document.createElement("li");
      li14.textContent="HTML";
      ul1.appendChild(li14);
      var li15=document.createElement("li");
      li15.textContent="CSS";
      ul1.appendChild(li15);
      var li16=document.createElement("li");
      li16.textContent="Java Script";
      ul1.appendChild(li16);
  resume.appendChild(ul1);

//Hobbies
  var Hobbies=document.createElement("h2");
  Hobbies.textContent="Hobbies"
  resume.appendChild(Hobbies);
    var ul2=document.createElement("ul");
      var li11=document.createElement("li");
      li11.textContent="Badminton";
      ul2.appendChild(li11);
      var li12=document.createElement("li");
      li12.textContent="Chess";
      ul2.appendChild(li12);
      var li13=document.createElement("li");
      li13.textContent="Photography";
      ul2.appendChild(li13);
      var li14=document.createElement("li");
      li14.textContent="Pencil sketching";
      ul2.appendChild(li14);
      var li15=document.createElement("li");
      li15.textContent="Art and Design";
      ul2.appendChild(li15);
      var li16=document.createElement("li");
      li16.textContent="Reading";
      ul2.appendChild(li16);
  resume.appendChild(ul2);
