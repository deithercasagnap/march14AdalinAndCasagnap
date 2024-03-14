const express = require('express');
const mongoose  = require('mongoose');

const app = express();


const url = "mongodb://127.0.0.1:27017/admin";

app.use(express.json());

mongoose.connect(url, {})
.then(() =>{
    console.log('Database connected')
})
.catch((err) => {
    console.log('error connecting to db...', err)
});


const RegistrationRoute = require('./Route/Registration.route');
app.use(('/registration'), RegistrationRoute);


const VenueReservationRoute = require('./Route/VenueReservation.route');
app.use(('/reservation'), VenueReservationRoute);



const port = "3000";
app.listen(port,  () => {
    console.log(`listening to port ${port}....`)
});
