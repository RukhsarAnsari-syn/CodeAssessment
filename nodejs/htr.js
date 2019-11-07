var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log('image is loacted')
    }
  };
  xhttp.open("GET", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFgkPyhb6dQjmSOgYK5BMUCuixOnURvrR6IyjBg6UhHetfDWeT", true);
  xhttp.send();