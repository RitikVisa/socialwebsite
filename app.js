// const observer = new IntersectionObserver((entries) =>{
//     entries.forEach((entry) => {
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }else{
//             entry.target.classList.remove('show');
//         }
//     })
// })

// const hiddenElement = document.querySelectorAll('.hidden');
// hiddenElement.forEach((el) => observer.observe(el));

// const hiddenElement2 = document.querySelectorAll('.hidden-2');
// hiddenElement2.forEach((el) => observer.observe(el));
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.2, // Adjust this threshold value as needed
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

const hiddenElement2 = document.querySelectorAll('.hidden-2');
hiddenElement2.forEach((el) => observer.observe(el));
