let print = document.getElementById("print");
function generateResume() {
    let profile = document.getElementById("file");
    let getname = document.getElementById('name').value;
    let getadd = document.getElementById('add').value;
    let getnum = document.getElementById("num").value;
    let getobj = document.getElementById("objective").value;
    let getqualification = document.getElementById("qualification").value;
    let getexperience = document.getElementById("exp").value;
    let expertise = document.getElementById("skill").value;
    let expertise2 = document.getElementById("skill2").value;
    let expertise3 = document.getElementById("skill3").value;
    let lan = document.getElementById("lan1").value;
    let lan2 = document.getElementById("lan2").value;
    let lan3 = document.getElementById("lan3").value;
    let lan4 = document.getElementById("lan4").value;
    if (profile.files && profile.files[0]) {
        let pic = profile.files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
            const image64 = reader.result;
            localStorage.setItem('name', getname);
            localStorage.setItem('obj', getobj);
            localStorage.setItem('add', getadd);
            localStorage.setItem('num', getnum);
            localStorage.setItem('qualification', getqualification);
            localStorage.setItem('experience', getexperience);
            localStorage.setItem('expertise', expertise);
            localStorage.setItem('expertise2', expertise2);
            localStorage.setItem('expertise3', expertise3);
            localStorage.setItem('lan', lan);
            localStorage.setItem('lan2', lan2);
            localStorage.setItem('lan3', lan3);
            localStorage.setItem('lan4', lan4);
            localStorage.setItem('profile', image64);
        };
        reader.readAsDataURL(pic);
    }
    window.location.href = "template.html";
}
print.addEventListener("click", generateResume);
export {};
