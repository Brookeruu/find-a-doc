import $ from 'jquery';
import { FindDoctor } from './find-doctor.js';

export function makeDocInfoCard(body) {
  const accepts_new_patients = body.data.practices.accepts_new_patients;
  let accepts_new;

  if (accepts_new_patients === true) {
    accepts_new = "Yes"
  } else {
    accepts_new = "No"
  }

  for(let i = 0; i < body.data.length; i++) {
    $("#show-doctors").append(`
      <div class="card"
      <img src="${body.data.profile.image_url}" alt="Image of Doctor">
      <div class="card-body id="data.practices.uid"
      <h5 class="card-title">${body.data.practices.name}</h4>
      <h6>${body.data.practices.website}</h6>

      <p>Accepting New Patients: ${accepts_new}</p>
      <p>Location: ${body.data.practices.visit_address.street}, ${body.data.practices.visit_address.state}, ${body.data.practices.visit_address.zip} </p>
      <p>${body.data.practices.phones.number}</p>
      </div>
      </div>
          `)
  }
}

export function noMatches(body) {
  $("#show-doctors").append(`
<div class="no-match">
<h3>Sorry, no doctors match this search criteria</h3>
    `)
}
