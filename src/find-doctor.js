 class FindDoctor {

   getAllDoctors(userInput) {
     return new Promise(function(resolve, reject) {
       let request = new XMLHttpRequest();
       let url = ` https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

       request.onload = function() {
         if(this.status === 200) {
           resolve(request.response);
         } else {
           reject(Error(request.statusText));
         }
       }
       request.open("GET", url, true);
       request.send();
     });
   }

}

export { FindDoctor};
