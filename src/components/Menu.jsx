import React, { useEffect, useState } from 'react';


function Menu() {
  let [value,setValue] = useState("dhifan");
  async function ak()
  {
    let response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-01-19&sortBy=publishedAt&apiKey=e1a4fbb7efab4af3a8dfdc884ecff84c");

    let result = await response.json();
    // console.log(result);
    // console.log(result.articles)
   let p = result.articles.map((a) => {return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={a.urlToImage}alt=''/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{a.title}</div>
              <p class="text-gray-700 text-base">
                {a.description}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coding</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Akhilesh</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AI</span>
            </div>
          </div>
   )})
   console.log(p)
   setValue(p);
  }
  ak()
return  <div class="p-2 grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-2">
            {value} 
          </div> 

  
}

export default Menu;
