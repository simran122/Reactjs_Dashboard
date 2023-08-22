import express from "express";

const router = express.Router();

const users = [

    {

        users: 199,
        visitors: 0,
    },
    {
        week: "Week 1",
        users: 100,
        visitors: 500,
    },
    {
        week: "Week 2",
        users: 150,
        visitors: 300,
        users: 450,

    },
    {
        week: "Week 3",
        users: 250,
        visitors: 400,
    },
    {
        week: "Week 4",
        users: 200,
        visitors: 450,
    },

];
const info = [
    { name: "Basic Tees", value: 55 },
    { name: "Custom short Pants", value: 31 },
    { name: "Super Hoodies", value: 14 }
];

const collection = {
    info: info,
    users: users
}

router.get("/", (req, res) => {
    res.send(collection);
});



export default router;
