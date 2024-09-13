const name = localStorage.getItem('name');
const obj = localStorage.getItem('obj');
const add = localStorage.getItem('add');
const num = localStorage.getItem('num');
const qualification = localStorage.getItem('qualification');
const experience = localStorage.getItem('experience');
const expertise = localStorage.getItem('expertise');
const expertise2 = localStorage.getItem('expertise2');
const expertise3 = localStorage.getItem('expertise3');
const lan = localStorage.getItem('lan');
const lan2 = localStorage.getItem('lan2');
const lan3 = localStorage.getItem('lan3');
const lan4 = localStorage.getItem('lan4');

const profile = localStorage.getItem('profile');
if (name && obj && add && num && profile && qualification && experience) {
    (document.getElementById('name') as HTMLHeadingElement).textContent = name;
    (document.getElementById('para') as HTMLParagraphElement).textContent = obj;
    (document.getElementById('displayadd') as HTMLParagraphElement).textContent = add;
    (document.getElementById('displaynum') as HTMLOutputElement).textContent = num;
    (document.getElementById('displayqual') as HTMLLIElement).textContent = qualification;
    (document.getElementById('displayex') as HTMLLIElement).textContent = experience;
    (document.getElementById('skill') as HTMLOutputElement).textContent = expertise;
    (document.getElementById('skill2') as HTMLOutputElement).textContent = expertise2;
    (document.getElementById('skill3') as HTMLOutputElement).textContent = expertise3;
    (document.getElementById('lan') as HTMLLIElement).textContent = lan;
    (document.getElementById('lan2') as HTMLLIElement).textContent = lan2;
    (document.getElementById('lan3') as HTMLLIElement).textContent = lan3;
    (document.getElementById('lan4') as HTMLLIElement).textContent = lan4;


    (document.getElementById('first') as HTMLImageElement).src = profile;

}
else{
    (document.getElementById('name') as HTMLOutputElement).textContent = "Name not found";
}