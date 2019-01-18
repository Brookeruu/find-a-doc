import $ from 'jquery';
import { FindDoctor } from './find-doctor.js';

export function makeDocInfoCard(body) {
  // const accepts_new_patients = body.data.practices.accepts_new_patients;
  // let accepts_new;
  //
  // if (accepts_new_patients === true) {
  //   accepts_new = "Yes";
  // } else {
  //   accepts_new = "No";
  // }
  $("#show-doctors").empty();
  for(let i = 0; i < body.data.length; i++) {
    $("#show-doctors").append(`
      <div class="card align-items-center" style="width: 15rem; height:4 5rem">
      <img class="" src="${body.data[i].profile.image_url}" alt="Image of Doctor">
      <div class="card-body id="data.practices[0].uid"
      <h3 class="card-title d-inline-block">
      ${body.data[i].profile.first_name}
      ${body.data[i].profile.last_name},
      ${body.data[i].profile.title}
      </h3>
      <h6> <a href="${body.data[i].practices[0].website}" class="card-link">Website</a> </h6>
      <p class="card-text">Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}</p>

      <p>Location: ${body.data[i].practices[0].visit_address.street}</p>

      <p>${body.data[i].practices[0].visit_address.state}, ${body.data[i].practices[0].visit_address.zip} </p>

      <p>Phone Number:${body.data[i].practices[0].phones[0].number}</p>
      </div>
      </div>
          `);
  }
}

export function noMatches(body) {
  $("#show-doctors").append(`
<div class="no-match">
<h3>Sorry, no doctors match this search criteria</h3>
    `)
}
