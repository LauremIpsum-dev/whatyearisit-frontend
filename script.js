//get year

let urlVercel ="https://whatyearisit-backend-hazel-nine.vercel.app/year";

fetch(urlVercel)
.then(response =>response.json())
.then(data => {data.year
    document.querySelector('#year').textContent = data.year
});