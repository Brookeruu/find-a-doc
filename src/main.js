
import { FindDoctor } from './find-doctor';
import { makeDocInfoCard, noMatches} from './doctor-info-interface.js';
// import missingBike from '../images/bike-image.png';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#user-input').submit(function(event) {
    event.preventDefault();
    let userInput = $("#search-input").val();

    const findDoctor = new FindDoctor();
    let findDocPromise = findDoctor.getAllDoctors(userInput);

    findDocPromise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);

      if (body.meta.total > 0) {
        makeDocInfoCard(body);
      } else {
        noMatches(body);
      }
    }, function(error) {
      $('#showErrors').text('There was an error processing your request: ${error.message}');
    });


    // ---
  });
});
