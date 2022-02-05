function show() {
    var page = document.getElementById('page');
    var abt = document.getElementById('abt');
    if (page.style.display === 'none') {
        page.style.display = 'block';
        abt.style.display = 'none';
    } else {
        page.style.display = 'none';
        abt.style.display = 'block';
    }
    window.scroll({
        top: 0
    });
}