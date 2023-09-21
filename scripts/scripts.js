let name=document.querySelector('.name')
let about=document.querySelector('#about')
let contact=document.querySelector('.contact')
let contactclick=document.querySelector('#contact')
let container=document.querySelector('.container')
let home=document.querySelector('#home')
textappear=document.querySelector('#info')
let clicked=false
let clicked2=false
var x=window.matchMedia("(max-width: 1020px)")



function resize(x){
    if(!x.matches){
        about.addEventListener('click',()=>{
            if(clicked==false){
        
                name.style.display='none'
                container.style.flexDirection='row'
                container.style.margin='200px'
                contact.style.opacity='0'
                contact.style.display='none'
                textappear.style.opacity='1'
                setTimeout(() => {
                    textappear.style.display='block'
                }, 500);
                
                
                clicked=true
                clicked2=false
            }
            else if(clicked==true){
        
                textappear.style.display='none'
                container.style.flexDirection='column'
                container.style.margin='70px'
                
                name.style.display='block'
                
                textappear.style.opacity='0'
                clicked2=false
                clicked=false
            }
                
                
            })
        contactclick.addEventListener('click',()=>{
            if(clicked2==false){
                name.style.display='none'
                container.style.flexDirection='row'
                container.style.margin='300px'
                textappear.style.opacity='0'
                textappear.style.display='none'
                contact.style.display='block'
                contact.style.opacity='1'
                clicked2=true
                clicked=false
            }
            else if(clicked2==true){
                container.style.margin='70px'
                name.style.display='block'
                contact.style.display='none'
                contact.style.opacity='0'
                container.style.flexDirection='column'
                clicked=false
                clicked2=false
            }
                
                
            })
        home.addEventListener('click',()=>{
            name.style.display='block'
            container.style.flexDirection='column'
            clicked=false;
            clicked2=false;
            container.style.margin='70px';
            contact.style.display='none'
            textappear.style.display='none'
            contact.style.opacity='0'
            textappear.style.opacity='0'
        
        })
    }
    else{
        // MAX WIDTH 1020PX
        container.style.margin='30px'
        about.addEventListener('click',()=>{
            if(clicked==false){
        
                name.style.display='none'
                container.style.flexDirection='row'
                container.style.margin='50px'
                contact.style.opacity='0'
                contact.style.display='none'
                textappear.style.opacity='1'
                setTimeout(() => {
                    textappear.style.display='block'
                }, 500);
                
                
                clicked=true
                clicked2=false
            }
            else if(clicked==true){
        
                textappear.style.display='none'
                container.style.flexDirection='column'
                container.style.margin='30px'
                
                name.style.display='block'
                
                textappear.style.opacity='0'
                clicked2=false
                clicked=false
            }
                
                
            })
        contactclick.addEventListener('click',()=>{
            if(clicked2==false){
                name.style.display='none'
                container.style.flexDirection='row'
                container.style.margin='70px'
                textappear.style.opacity='0'
                textappear.style.display='none'
                contact.style.display='block'
                contact.style.opacity='1'
                clicked2=true
                clicked=false
            }
            else if(clicked2==true){
                container.style.margin='30px'
                name.style.display='block'
                contact.style.display='none'
                contact.style.opacity='0'
                container.style.flexDirection='column'
                clicked=false
                clicked2=false
            }
                
                
            })
        home.addEventListener('click',()=>{
            name.style.display='block'
            container.style.flexDirection='column'
            clicked=false;
            clicked2=false;
            container.style.margin='30px';
            contact.style.display='none'
            textappear.style.display='none'
            contact.style.opacity='0'
            textappear.style.opacity='0'
        
        })
    }
}
resize(x)
x.addEventListener('resize',()=>{
    resize()
})

