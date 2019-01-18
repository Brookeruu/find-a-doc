
import { FindDoc } from './find-doctor';
import { makeDocInfoCard, noMatches} from './doctor-info-interface.js';
// import missingBike from '../images/bike-image.png';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#get-symptoms-list').click(function(event) {
    event.preventDefault();
    let userInput = $("#searchInput").val();

    const findDoctor = new FindDoctor();
    let findDocPromise = findDoctor.getAllDoctors(symptom);


    findDocPromise.then(function(response) {
      let body = JSON.parse(response);

      if (body.meta.total > 0) {
        body.makeDocInfoCard();
      } else {
        body.noMatches();
      }
    }, function(error) {
      $('.showErrors').text('There was an error processing your request: ${error.message}')
    }
    });


    // ---
  })
})
