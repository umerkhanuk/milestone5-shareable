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
    document.getElementById('name').textContent = name;
    document.getElementById('para').textContent = obj;
    document.getElementById('displayadd').textContent = add;
    document.getElementById('displaynum').textContent = num;
    document.getElementById('displayqual').textContent = qualification;
    document.getElementById('displayex').textContent = experience;
    document.getElementById('skill').textContent = expertise;
    document.getElementById('skill2').textContent = expertise2;
    document.getElementById('skill3').textContent = expertise3;
    document.getElementById('lan').textContent = lan;
    document.getElementById('lan2').textContent = lan2;
    document.getElementById('lan3').textContent = lan3;
    document.getElementById('lan4').textContent = lan4;
    document.getElementById('first').src = profile;
}
else {
    document.getElementById('name').textContent = "Name not found";
}
export {};
