// Source - https://stackoverflow.com/a/68089192

// Posted by Manpreet Singh Dhillon, modified by community. See post 'Timeline' for change history

// Retrieved 2026-05-17, License - CC BY-SA 4.0



var bfr = '';
setInterval(function () {
    fetch(window.location).then((response) => {
        return response.text();
    }).then(r => {
        if (bfr != '' && bfr != r) {
            window.location.reload();
        }
        else {
            bfr = r;
        }
    });
}, 2000);

