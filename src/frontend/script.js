document.addEventListener('DOMContentLoaded', function() {
    // load header.html file
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            // get the header element
            const header = document.getElementById('header');
            // set the header's innerHTML to the loaded HTML
            header.innerHTML = html;

            // call and assign SchoolUniform, SportsWear, TShirts, Curtains and Accessories elements
            const schoolUniform = document.querySelector('.SchoolUniform');
            const sportsWear = document.querySelector('.SportsWear');
            const tshirts = document.querySelector('.TShirts');
            const curtains = document.querySelector('.Curtains');
            const accessories = document.querySelector('.Accessories');

            // call and assign SchoolUniformOptionsOuter, SportsWearOptionsOuter, TShirtsOptionsOuter, CurtainsOptionsOuter, and AccessoriesOptionsOuter elements
            const schoolUniformOptions = document.querySelector('.SchoolUniformOptionsOuter');
            const sportsWearOptions = document.querySelector('.SportsWearOptionsOuter');
            const tshirtsOptions = document.querySelector('.TShirtsOptionsOuter');
            const curtainsOptions = document.querySelector('.CurtainsOptionsOuter');
            const accessoriesOptions = document.querySelector('.AccessoriesOptionsOuter');

            // hide SportsWearOptionsOuter, TShirtsOptionsOuter, CurtainOptionsOuter, and AccessoriesOptionsOuter elements by default
            sportsWearOptions.classList.add('hidden');
            tshirtsOptions.classList.add('hidden');
            curtainsOptions.classList.add('hidden');
            accessoriesOptions.classList.add('hidden');

            // add event listeners to SchoolUniform, SportsWear, TShirts, Curtains, and Accessories elements

            schoolUniform.addEventListener('click', function() {
                // hide SportsWearOptionsOuter, TShirtsOptionsOuter, CurtainsOptionsOuter, and AccessoriesOptionsOuter elements
                sportsWearOptions.classList.add('hidden');
                tshirtsOptions.classList.add('hidden');
                curtainsOptions.classList.add('hidden');
                accessoriesOptions.classList.add('hidden');
                // show SchoolUniformOptionsOuter element
                schoolUniformOptions.classList.remove('hidden');
            });

            sportsWear.addEventListener('click', function() {
                // hide SchoolUniformOptionsOuter, TShirtsOptionsOuter, CurtainsOptionsOuter, and AccessoriesOptionsOuter elements
                schoolUniformOptions.classList.add('hidden');
                tshirtsOptions.classList.add('hidden');
                curtainsOptions.classList.add('hidden');
                accessoriesOptions.classList.add('hidden');
                // show SportsWearOptionsOuter element
                sportsWearOptions.classList.remove('hidden');
            });

            tshirts.addEventListener('click', function() {
                // hide SchoolUniformOptionsOuter, SportsWearOptionsOuter, CurtainsOptionsOuter, and AccessoriesOptionsOuter elements
                schoolUniformOptions.classList.add('hidden');
                sportsWearOptions.classList.add('hidden');
                curtainsOptions.classList.add('hidden');
                accessoriesOptions.classList.add('hidden');
                // show TShirtsOptionsOuter element
                tshirtsOptions.classList.remove('hidden');
            });

            curtains.addEventListener('click', function(){
                // hide SchoolUniformOptionsOuter, SportsWearOptionsOuter, TShirtsOptionsOuter, and AccessoriesOptionsOuter elements
                schoolUniformOptions.classList.add('hidden');
                sportsWearOptions.classList.add('hidden');
                tshirtsOptions.classList.add('hidden');
                accessoriesOptions.classList.add('hidden');
                // show CurtainsOptionsOuter element
                curtainsOptions.classList.remove('hidden');
            })

            accessories.addEventListener('click', function(){
                // hide SchoolUniformOptionsOuter, SportsWearOptionsOuter, TShirtsOptionsOuter, and CurtainsOptionsOuter elements
                schoolUniformOptions.classList.add('hidden');
                sportsWearOptions.classList.add('hidden');
                tshirtsOptions.classList.add('hidden');
                curtainsOptions.classList.add('hidden');
                // show AccessoriesOptionsOuter element
                accessoriesOptions.classList.remove('hidden');
            })
        });

    // function for dropdown animation in FAQ
    // call all RevealAnswer elements
    const revealAnswers = document.querySelectorAll('.RevealAnswer');

    // add event listeners to each RevealAnswer element
    revealAnswers.forEach(function(revealAnswer) {
        revealAnswer.addEventListener('click', function() {
            // get HiddenAnswer sibling of the current RevealAnswer element
            const hiddenAnswer = revealAnswer.nextElementSibling;

            // toggle the max-h-screen and opacity-100 classes on the HiddenAnswer element
            hiddenAnswer.classList.toggle('max-h-screen');
            hiddenAnswer.classList.toggle('opacity-100');
        });
    });

// get all OptionPngs elements
const optionPngs = document.querySelectorAll('.OptionPngs');

//turn cursor to pointer upon hovering over OptionPngs
optionPngs.forEach(function(optionPng) {
    optionPng.style.cursor = 'pointer';
});


// add onclick function to each OptionPng element
optionPngs.forEach(function(optionPng) {
optionPng.addEventListener('click', function() {

    // log the current URL
    const url = new URL(window.location.href);
    const pathname = url.pathname;
    const hash = url.hash;

      // check if current URL is uploadorderpagemale.html. if it is, it redirects user to customdesignmale.html, else redirects to customdesignfemale.html
    if (pathname.includes('uploadordermalepage.html') || hash.includes('uploadordermalepage')) {
    window.location.href = 'customdesignmalepage.html';
    } else if (pathname.includes('uploadorderfemalepage.html') || hash.includes('uploadorderfemalepage')) {
    window.location.href = 'customdesignfemalepage.html';
    }
    });
});
});

