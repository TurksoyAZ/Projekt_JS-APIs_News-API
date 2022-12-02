

// 1 Methode 
// fetch('https://newsapi.org/v2/everything?q=apple&from=2022-12-01&to=2022-12-01&sortBy=popularity&apiKey=a30cce76cde24f36bf04c2eff53c050b')
//     .then(parametr1 => parametr1.json())
//     .then(parametr2 => {

//         //überSchrift
//         let uberSchrift = document.createElement('h3')
//         uberSchrift.textContent = 'News By Super(code)'

//         //mainContainer 
//         let mainContainer = document.createElement('section')
//         mainContainer.classList.add('clsMainContainer')

//         document.body.appendChild(uberSchrift)
//         document.body.appendChild(mainContainer)

//         for (let i = 0; i < 12; i++) {

//             console.log(parametr2.articles[i]
//             );

//             //divs for Elements
//             let divsForElements = document.createElement('div')
//             divsForElements.classList.add('clsDivsForElements')

//             //img
//             divsForElements.innerHTML = `<img src='${parametr2.articles[i].urlToImage}'/>`

//             //title
//             divsForElements.innerHTML += `<p>${parametr2.articles[i].title}</p>`

//             //content
//             divsForElements.innerHTML += `<p>${parametr2.articles[i].content}</p>`

//             //publishedAt
//             divsForElements.innerHTML += `<p>${parametr2.articles[i].publishedAt}</p>`

//             //url link
//             divsForElements.innerHTML += `<button><a href='${parametr2.articles[i].url}' target='_blank'>READ MORE</a></button>`

//             mainContainer.appendChild(divsForElements)
//         }
//     })


// 2 Methode
fetch('https://newsapi.org/v2/everything?q=apple&from=2022-12-01&to=2022-12-01&sortBy=popularity&apiKey=a30cce76cde24f36bf04c2eff53c050b')
    .then(parametr1 => parametr1.json())
    .then(parametr2 => {
        console.log(parametr2.articles);

        let container = document.createElement('section')
        container.classList.add('forContainer')


        let uberSchrift = document.createElement('h3')
        uberSchrift.textContent = 'News By Super(code)'
        uberSchrift.classList.add('forUberSchrift')
        document.body.appendChild(uberSchrift)
        document.body.appendChild(container)

        for (let i = 0; i < 12; i++) {

            console.log(parametr2.articles[i]);

            //div
            let divForAlles = document.createElement('div')
            divForAlles.classList.add('forDivs')
            //img
            let imgs = document.createElement('img')
            imgs.src = parametr2.articles[i].urlToImage
            imgs.classList.add('forImgs')

            divForAlles.appendChild(imgs)
            container.appendChild(divForAlles)

            //title
            let forTitle = document.createElement('p')
            forTitle.textContent = parametr2.articles[i].title
            forTitle.classList.add('forParagraph')

            divForAlles.appendChild(forTitle)

            //description
            let forDescription = document.createElement('p')
            forDescription.textContent = parametr2.articles[i].description
            forDescription.classList.add('forParagraph')

            divForAlles.appendChild(forDescription)

            //publishedAt

            let forPublishedAt = document.createElement('p')
            forPublishedAt.classList.add('forParagraph')
            forPublishedAt.textContent = parametr2.articles[i].publishedAt

            divForAlles.appendChild(forPublishedAt)

            // a Tag Link
            //button for a tag
            let btn = document.createElement('button')
            btn.classList.add('forBtnA')

            //a tag
            let aLink = document.createElement('a')
            aLink.classList.add('forA')
            aLink.setAttribute('href', `${parametr2.articles[i].url}`)
            aLink.setAttribute('target', '_blank')
            aLink.textContent = 'READ MORE'

            btn.appendChild(aLink)
            divForAlles.appendChild(btn)

        }

    })
