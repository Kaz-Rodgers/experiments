    var button = document.querySelector('#button');
    var list = document.querySelector('#list');
    button.addEventListener('click', addToList);
    list.addEventListener('click', changeTitle);

    function changeTitle(e) {
      if(e.target.nodeName=='LI'){
         title.innerHTML = e.target.innerHTML;
      for(i = 0; i<e.target.parentNode.childrenlength; i++){
          e.target.parentNode.children[i].addEventListener('click',changeTitle);
      }
    }
   }

    function addToList() {
      list.innerHTML += "<li>Wise guy huh?</li>";
    }
