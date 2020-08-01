var view = 'new-life';

document.getElementById('game').style.display = 'none';
document.getElementById('activities').style.display = 'none';
document.getElementById('relationships').style.display = 'none';
document.getElementById('assets').style.display = 'none';

function view_page(page) {
    document.getElementById(view).style.display = 'none';
    document.getElementById(page).style.display = 'block';
    view = page;
}
