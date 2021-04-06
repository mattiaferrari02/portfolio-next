const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_TO,
        pass: process.env.PASSWORD,
    }
});

export default async (req, res) => {
    console.log(req.body);
    var mailOptions = {
        from: process.env.EMAIL_TO,
        to: process.env.EMAIL_TO,
        subject: `Proposta da ${req.body.contactEmail}`,
        html: req.body.emailText,
    };
    // console.log(req.body);
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.status(500).send("Errore 505 // Server, riprova dopo.");
        } else {
            res.status(200).json({ msg: "Risponderò il prima possibile!" });
        }
    });
};