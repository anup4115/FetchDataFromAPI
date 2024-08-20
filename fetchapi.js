document.getElementById("mybtn").addEventListener("click",makerequest);


//Fetch API data | show in web page | async await

async function makerequest(){
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       if(!response.ok){
        throw Error(response.statusText);
       }
       console.log(response);
       const data = await response.json();
       console.log(data);
       let op=document.getElementById("mydiv");
       data.forEach(e=>{
        op.innerHTML += `
        <div>ID: ${e.id}</div>
        <div>TITLE: ${e.title}</div>
        <div>BODY: ${e.body}</div>
        `
       })
    }catch(error){
        console.log(error);
    }
}