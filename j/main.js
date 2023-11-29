
//This code does NOT create any global variables

/*

fetch('houses.json')
.then(response => response.json())
.then(data => {
    //create a temp holder to append all the html generated inside the forEach iterator
    let html = '';

    //the argument "house" passed to the arrow function
    //holds each item in the array in turn. 
    data.forEach(house => {
        let family = house.members.join(' | ');
        
        // generate the html snippet for one array item
        //to be added to the "html" temp holder.
        let objInfo = 
        `<p class="house">${house.name}</p>
        <p class="folks">${family}</p>`
        html += objInfo;
    });

    //make a reference to the html container where
    //the info will be displayed.
    const container = document.querySelector('#container');
    container.innerHTML = html;
})
.catch( err => console.log('Oops!', err));
//this only runs if there is an error during the above process

*/



// This is an alternative for the above code using asyn/await 
//functions. This does create global variables.
 
async function fetchData(api) {
    try {
        let response = await fetch(api);
        let data = await response.json();
        return data;
    } catch(err) {
         //this only runs if an error occurs in above process
        console.log('Oops!', err);
    }
}
 
async function renderData(url, htmlContainer) {
    try {
        let data = await fetchData(url);
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = '';
 
        //the argument "house" passed to the arrow function
        //holds each item in the array in turn. 
        data.forEach(item => {

            // convert the members array into a string
            let family = item.members.join(' | ');
            
            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
            let objInfo = 
            `<p class="house">${item.name}</p>
            <p class="folks">${family}</p>`;
            html += objInfo;
        });

        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector(htmlContainer);
        container.innerHTML = html;

    } catch(err) {
        //this only runs if an error occurs in above process
        console.log('Oops!', err)
    }
    
}

renderData('houses.json', '#container');
