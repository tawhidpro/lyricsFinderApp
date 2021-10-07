const searchBtn = document.querySelector('.search-btn');  
            searchBtn.addEventListener('click',function(){
                const searchInput = document.querySelector('#searchInput').value;
                fetch(`https://api.lyrics.ovh/suggest/${searchInput}`)
                .then(response => response.json())
                .then(data => {
                    displaySearchResult.innerHTML = "";
                    for (let i = 0; i < data.data.length; i++) {
                        const displaySearchResult = document.getElementById('displaySearchResult');
                        displaySearchResult.innerHTML += `
                        <div class="search-result col-md-8 mx-auto py-2">
                        <div class="single-result row align-items-center my-1 p-2">
                            <div class="col-md-9">
                                <h3 class="lyrics-name">${data.data[i].title}</h3>
                                <p class="author lead">Singer : <span>${data.data[i].artist.name}</span></p>
                            </div>
                            <div class="col-md-3 text-md-right text-center">
                                <a href="https://www.facebook.com/" class="btn btn-success">Get Lyrics </a>
                            </div>
                            </div>
                        </div>
                        `
                        if(i == 9){
                            break;
                        }             
                      ;                        
                    } 
            });
            });
