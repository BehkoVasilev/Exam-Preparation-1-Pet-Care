
import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { catalogView } from './views/catalogView.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { homeView } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/registerView.js';

const main = document.getElementById('content');

page(decorateContext);
page('/', homeView);
page('/catalog', catalogView);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if (user) {
        ctx.user = user;
    }
    next();
}

function renderMain(content) {
    render(content, main);
}


