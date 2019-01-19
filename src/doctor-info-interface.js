import $ from 'jquery';
import { FindDoctor } from './find-doctor.js';

export function makeDocInfoCard(body) {

  $("#show-doctors").empty();

  for(let i = 0; i < body.data.length; i++) {
    const accepts_new_patients = body.data[i].practices[0].accepts_new_patients;
    let accepts_new;

    if (accepts_new_patients === true) {
      accepts_new = "Yes";
    } else {
      accepts_new = "No";
    }

    $("#show-doctors").append(`
      <div class="card shadow-sm p-3 mb-5 bg-white>
      <div class="card-body" id="data.practices[0].uid">
      <img class="text-center" src="${body.data[i].profile.image_url}" alt="Image of Doctor">
      <h4 class="card-title text-center">
      ${body.data[i].profile.first_name}
      ${body.data[i].profile.last_name},
      ${body.data[i].profile.title}
      </h4>

      <p class="card-text text-center">${body.data[i].practices[0].visit_address.street}</p>

      <p class="card-text text-center"> ${body.data[i].practices[0].visit_address.state}, ${body.data[i].practices[0].visit_address.zip} </p>

      <p class="card-text text-center">Accepting New Patients: ${accepts_new}</p>
      <p class="card-text text-center">Phone: ${body.data[i].practices[0].phones[0].number}</p>
      </div>
      </div>
      `);
    }
  }

  export function noMatches(body) {
    $("#show-doctors").empty();
    $("#show-doctors").append(`
      <div class="no-match">
      <h3>Sorry, no doctors match this search criteria</h3>
      `)
    }
