function add2 (nbr){
    if(nbr < 10){
        let elem = document.createElement('div');
        nbr+= 2;
        elem.innerHTML = nbr.toString();
        document.body.appendChild(elem);
        add2(nbr);
    }
}

add2(0);
