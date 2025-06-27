//get year

let urlVercel ="whatyearisit-backend-eight-tau.vercel.app";

fetch(urlVercel)
.then(response =>response.json())
.then(data => {data.year
    document.querySelector('#year').textContent = data.year
});