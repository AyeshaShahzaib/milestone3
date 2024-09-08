document.addEventListener('DOMContentLoaded', function () {
    var _a, _b, _c;
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        generateResume();
    });
    (_a = document.getElementById('add_education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return addField('education'); });
    (_b = document.getElementById('add_experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return addField('experience'); });
    (_c = document.getElementById('add_skill')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return addField('skills'); });
});
function addField(sectionId) {
    var section = document.getElementById(sectionId);
    var textarea = document.createElement('textarea');
    textarea.name = sectionId;
    textarea.placeholder = "Your ".concat(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
    textarea.required = true;
    section.appendChild(textarea);
}
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNo = document.getElementById('contact_no').value;
    var education = getValues('education');
    var experience = getValues('experience');
    var skills = getValues('skills');
    updateResume(name, email, contactNo, education, experience, skills);
    var resumeSection = document.getElementById('Resume');
    resumeSection.style.display = "block";
    alert("Scroll down to see your resume");
}
function getValues(sectionId) {
    var section = document.getElementById(sectionId);
    var textareas = section.querySelectorAll('textarea');
    return Array.from(textareas).map(function (textarea) { return textarea.value; });
}
function updateResume(name, email, contactNo, education, experience, skills) {
    var resumeSection = document.getElementById('Resume');
    resumeSection.querySelector('.Header2 h1').textContent = name;
    resumeSection.querySelector('.PersonalInfo .p1').innerHTML = "<strong>Name:</strong> ".concat(name);
    resumeSection.querySelector('.PersonalInfo p:nth-child(2)').innerHTML = "<strong>Email:</strong> ".concat(email);
    resumeSection.querySelector('.PersonalInfo p:nth-child(3)').innerHTML = "<strong>Contact:</strong> ".concat(contactNo);
    updateSection('education', education);
    updateSection('experience', experience);
    updateSection('skills', skills);
}
function updateSection(sectionId, items) {
    var section = document.querySelector(".".concat(sectionId.charAt(0).toUpperCase() + sectionId.slice(1), " ul"));
    section.innerHTML = '';
    items.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        section.appendChild(li);
    });
}
