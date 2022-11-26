import { getAll } from '../api/data.js';
import { html } from '../lib.js';

function catalogTemplate(pets) {
    return html`
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${pets.lenght == 0 ? html`<div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>` : pets.map(pet => petCardTemplate(pet))}
        
            </div>
        </section>
    `
}

function petCardTemplate(pet) {
    return html`
        <div class="animals-board">
            <img class="animal-image-cover" src="${pet.image}">
            <h2 class="name">${pet.name}</h2>
            <h3 class="breed">${pet.bread}</h3>
            <div class="action">
                <a class="btn" href="/catalog/${pet._id}">Details</a>
            </div>
        </div>
    `
}

export async function catalogView(ctx) {
    const pets = await getAll();
    ctx.render(catalogTemplate(pets))
}