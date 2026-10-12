import Contact from '../models/Contact.js';
import sendEmail from '../config/sendEmail.js';


export const createContact = async (req, res) => {

    try{
        const {name, email, website, message} = req.body;

        const contact = await Contact.create ({name, email, website, message});    

        try{
            await sendEmail({
                to: process.env.EMAIL_USER,
                subject: `New contact from ${name}`,
                html:`  <p><strong>Name</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Website:</strong> ${website || '-'}</p>
                        <p><strong>Message:</strong> ${message}</p>,
                `
            });

        } catch (emailError) {
            console.error('Email sned failed:', emailError.message);

        }



        res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            data: contact,
        });

    } catch (error) {
        res.status(400).json ({
            success: false,
            message: error.message,
        });


    }

};