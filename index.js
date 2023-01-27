const testimonails = [
    {
        name: "Olivie G",
        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        text: "I would like to personally thank you for your outstanding product. Just what I was looking for.It is great to a have person like you.Thank You!."
    },
    {
        name: "Dorit U",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        text: "Tata should be nominated for service of the year. We can't understand how we've been living without tata."
    },
    {
        name: "Bartlett E",
        photoUrl: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        text: "Tata is awesome! It's really wonderful. It really saves me time and effort. tata is exactly what our business has been lacking. I have gotten at least 50 times the value from tata."
    },
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const {name, photoUrl, text} = testimonails[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    console.log(text);
    usernameE1.innerText = name;
    idx++;
    if(idx === testimonails.length){idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    },10000);
}