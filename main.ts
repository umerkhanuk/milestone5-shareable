
let print = document.getElementById("print") as HTMLButtonElement;

function generateResume(){
    let profile = document.getElementById("file") as HTMLInputElement;
    let getname = (document.getElementById('name') as HTMLInputElement).value;
    let getadd = (document.getElementById('add') as HTMLInputElement).value;
    let getnum = (document.getElementById("num") as HTMLInputElement).value;
    let getobj = (document.getElementById("objective") as HTMLTextAreaElement).value;
    let getqualification = (document.getElementById("qualification") as HTMLInputElement).value;
    let getexperience = (document.getElementById("exp") as HTMLInputElement).value
    let expertise = (document.getElementById("skill") as HTMLInputElement).value;
    let expertise2 = (document.getElementById("skill2") as HTMLInputElement).value;
    let expertise3= (document.getElementById("skill3") as HTMLInputElement).value;
    let lan= (document.getElementById("lan1") as HTMLInputElement).value;
    let lan2= (document.getElementById("lan2") as HTMLInputElement).value;
    let lan3= (document.getElementById("lan3") as HTMLInputElement).value;
    let lan4= (document.getElementById("lan4") as HTMLInputElement).value;

        if(profile.files && profile.files[0]){
        let pic = profile.files[0];
        let reader = new FileReader();

        reader.onloadend = function(){
        const image64 = reader.result as string;

        localStorage.setItem('name', getname);
        localStorage.setItem('obj', getobj);
        localStorage.setItem('add', getadd);
        localStorage.setItem('num', getnum);
        localStorage.setItem('qualification',getqualification);
        localStorage.setItem('experience',getexperience);
        localStorage.setItem('expertise',expertise);
        localStorage.setItem('expertise2',expertise2);
        localStorage.setItem('expertise3',expertise3);
        localStorage.setItem('lan',lan);
        localStorage.setItem('lan2',lan2);
        localStorage.setItem('lan3',lan3);
        localStorage.setItem('lan4',lan4);
    
        localStorage.setItem('profile', image64);
        }
    reader.readAsDataURL(pic)
    }
        window.location.href="template.html";
}
print.addEventListener("click",generateResume)


