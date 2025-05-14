const apiUrl = "https://682199fa259dad2655afc100.mockapi.io";

const get_scores = async () => {
    const res = await fetch(`${apiUrl}/scores`);
    const data = await res.json();

    data.forEach(element => {

        // console.log(element.username, element.score)


        let scores_list = document.getElementById("scores_list")

        // <li class="border p-3 rounded">
        //     <div class="d-flex justify-content-between">
        //         <span class="bg-light text-dark p-1 rounded">user1</span> <span class="bg-light text-dark p-1 rounded">Score: 900</span>
        //  </div>
        // </li>

        let li = document.createElement("li");
        li.classList.add("border")
        li.classList.add("p-3")
        li.classList.add("rounded")

        let div = document.createElement("div");
        div.classList.add("d-flex")
        div.classList.add("justify-content-between")

        let span1 = document.createElement("span1");
        span1.classList.add("bg-light")
        span1.classList.add("text-dark")
        span1.classList.add("p-1")
        span1.classList.add("rounded")
        span1.innerText = element.username

        let span2 = document.createElement("span1");
        span2.classList.add("bg-light")
        span2.classList.add("text-dark")
        span2.classList.add("p-1")
        span2.classList.add("rounded")
        span2.innerText = `Score: ${element.score}`

        div.appendChild(span1)
        div.appendChild(span2)
        li.appendChild(div)
        scores_list.appendChild(li)

    });
}

get_scores()


