
        // this is one method to select a bunch of paragraph.
        /* let myPara = document.getElementsByTagName('p');
        for( var para of myPara){
            para.style = "color: blue;";
        } */
        //practice of getElementsByClassName: it outputs an bundle of object wheather document only has one tag or no tag.
        let myPara = document.getElementsByClassName('blue');
        for( var para of myPara ){
            para.style = "color: blue;";
        }
        //Practice of query Selector
        let myText = document.querySelector('#special .somclass');
        myText.style = "color: purple;";

        //Practice of querySelectorAll
        /* let mewText = document.querySelectorAll('#example p');
        for( var paras of mewText){
            paras.style = "color: orange; font-weight: bold;";
        } */

        //Practice for innerHtml
        let newDiv = document.getElementById('innerhtml');
        newDiv.innerHTML = `<p>This is a paragraph using the innerHTML tag in javascript</p>`;
        let newDivP = document.querySelector('#innerhtml p');
        newDivP.style = "color: darkgreen; font-size: 20px";
        //practice classname property.
        let firstpara = document.querySelector('#example p');
        firstpara.className = 'orange bold';

        //practicing for create element and text node
        const myDiv = document.createElement('div');
        const newText = document.createTextNode("Here is an paragraph using createElement property.");
        myDiv.appendChild(newText);
        let div2 = document.querySelector('section');
        div2.appendChild(myDiv);

        //remove an element from page
        let mySection = document.querySelector('section');
        mySection.removeChild(mySection.children[0]);