window.onload = function(){
    document.getElementById("download").addEventListener("click",()=>{
        const cv = this.document.getElementById('cv');
        console.log(cv);
        console.log(window);
          var options = {
            html2canvas:  { scale: 2 },
            image:        { type: 'jpeg', quality: 0.98 },
            jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' },
            margin:       15, 
            filename:     'resume.pdf',
          };

        
        html2pdf().from(cv).set(options).save();
    })
}