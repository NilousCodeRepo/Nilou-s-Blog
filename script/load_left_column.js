fetch("../structure/left_column.html") //http request
    .then(response => response.text())//convert to usable syntax
    .then(html => {
        document.getElementById("left_column_placeholder").innerHTML = html;
    } //make the substitution in the placeholder
);
