//Imports
const express = require("express");
const path = require("path");
const { port, secret } = require("./config");
const { engine } = require("express-handlebars");
const session = require("express-session");
const addSession = require("./middlewares/addSession");
const { DateTime } = require("luxon");

/*---------Routes Imports---------*/
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const rentalRoutes = require("./routes/rentalRoutes");

/*---------APP Configuration---------*/
const app = express();

app.use(express.static(path.join(__dirname, "static"))); //Path to static elements for app

/*---------APP Middlewares---------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Forms-encoded to JS objects
app.use(
  session({
    secret: secret, //Cookie Encoder
    resave: false, //Dont send cookie every time
    saveUninitialized: false,
  })
);
app.use(addSession);

/*---------Static Elements Route---------*/
app.use(express.static(path.join(__dirname, "static")));

/*---------Handlebars Template Engine Config---------*/
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    // partialsDir:path.join(__dirname,"views","components"),
    helpers: {
      formatDate: function (date) {
        const newDate = DateTime.fromJSDate(date);
        return newDate.toFormat("yyyy-MM-dd");
      },
      controlDate:function(date){
        const newDate = DateTime.fromJSDate(date)
        const diff = newDate.diffNow(["minutes","hours","days"]).toObject()
        if (diff.minutes > 0){
          return false
        }
        else{
          return true
        }
      },
      validateDate: function(date, today){
        if (date < today){
            return true
        }
        return false
      },
      formatHour: function(date){
        const newDate = DateTime.fromJSDate(date)
        const diff = newDate.diffNow(["minutes","hours","days"]).toObject()
        if(diff.days<0){
            return `Hace ${-1*diff.days} días`
        }else if(diff.hours<0){
            return `Hace ${-1*diff.hours} horas`
        }else if(diff.minutes<0){
            return `Hace ${Number.parseInt(-1*diff.minutes)} minutos`
        }
    },
    return: function(fecha_inicio,fecha_fin){
        const f1 = DateTime.fromJSDate(fecha_inicio)
        const f2 = DateTime.fromJSDate(fecha_fin)
        const diff={
            "minutes":f2.minute-f1.minute,
            "hours": f2.hour-f1.hour,
            "days": f2.day-f1.day
        }
        
        if(diff.days>0){
            return `${diff.days} days left to return the film`
        }else if(diff.hours>0){
            return `${diff.hours} hours left to return the film`
        }else if(diff.minutes>0){
            return `${Number.parseInt(diff.minutes)} minutes left to return the film`
        }
    },
      twoDecimals: function(num){
            
        const newNum = Number(num)
        const aux = newNum.toFixed(2)
        return aux

      }
    }
  })
);

app.set("view engine", "hbs"); //Using template engine
app.set("views", "views"); //Route for hbs files (html)

/*---------Using Routes---------*/
app.use(userRoutes);
app.use(authRoutes);
app.use(movieRoutes);
app.use(rentalRoutes);

/*---------APP Port Config---------*/
app.listen(port, function () {
  console.log("App listening in: http://localhost:" + port);
});
