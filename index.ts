document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        generateResume();
    });

    document.getElementById('add_education')?.addEventListener('click', () => addField('education'));
    document.getElementById('add_experience')?.addEventListener('click', () => addField('experience'));
    document.getElementById('add_skill')?.addEventListener('click', () => addField('skills'));
});

function addField(sectionId: string) {
    const section = document.getElementById(sectionId) as HTMLElement;
    const textarea = document.createElement('textarea');
    textarea.name = sectionId;
    textarea.placeholder = `Your ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
    textarea.required = true;
    section.appendChild(textarea);
}

function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contactNo = (document.getElementById('contact_no') as HTMLInputElement).value;

    const education = getValues('education');
    const experience = getValues('experience');
    const skills = getValues('skills');

    updateResume(name, email, contactNo, education, experience, skills);

    const resumeSection = document.getElementById('Resume') as HTMLElement;
    resumeSection.style.display="block";

    alert("Scroll down to see your resume")
}

function getValues(sectionId: string): string[] {
    const section = document.getElementById(sectionId) as HTMLElement;
    const textareas = section.querySelectorAll('textarea');
    return Array.from(textareas).map(textarea => textarea.value);
}

function updateResume(name: string, email: string, contactNo: string, education: string[], experience: string[], skills: string[]) {
    const resumeSection = document.getElementById('Resume') as HTMLElement;

    resumeSection.querySelector('.Header2 h1')!.textContent = name;
    resumeSection.querySelector('.PersonalInfo .p1')!.innerHTML = `<strong>Name:</strong> ${name}`;
    resumeSection.querySelector('.PersonalInfo p:nth-child(2)')!.innerHTML = `<strong>Email:</strong> ${email}`;
    resumeSection.querySelector('.PersonalInfo p:nth-child(3)')!.innerHTML = `<strong>Contact:</strong> ${contactNo}`;

    updateSection('education', education);
    updateSection('experience', experience);
    updateSection('skills', skills);
}

function updateSection(sectionId: string, items: string[]) {
    const section = document.querySelector(`.${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)} ul`) as HTMLElement;
    section.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        section.appendChild(li);
    });

}

