const apiKey = "021b20b186864a8fb67c9decf3671584";
const mainDiv = document.getElementById("results");
const countrySelect = document.getElementById("countrySelect");
function fetchNews()
{
    const selectedCountry = countrySelect.value;
    const url =`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${apiKey}`;
    mainDiv.textContent = " ";
    fetchData(url);
}
async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status == "ok") {
      displayData(data.articles);
    } else {
      console.log("Element Not Found");
      alert("Element Not Found");
    }
    function displayData(val) {
      console.log(val);
      val.forEach(function (news) {
        const subDiv = document.createElement("div");
        subDiv.classList.add("card");
        const nsource = document.createElement("h3");
        nsource.textContent = news.source.name;
        const nimg = document.createElement("img");
        nimg.src = news.urlToImage;
        nimg.alt = news.title;
        const ntitle = document.createElement("h2");
        ntitle.textContent = news.title;
        const ndiscription = document.createElement("p");
        ndiscription.textContent = news.description;
        const ntime = document.createElement("p");
        ntime.textContent = news.publishedAt;
        const btn = document.createElement("button");
        const anch = document.createElement("a");
        anch.href = news.url;
        anch.textContent = "For More News";
        anch.target = "_blank";
        btn.appendChild(anch);
        subDiv.append(nsource, nimg, ntitle, ndiscription, ntime, btn);
        mainDiv.appendChild(subDiv);
      });
    }
  } catch (err) {
    console.error(`Error fetching data from ${url}: ${err}`);
  }
}

