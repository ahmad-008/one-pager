import Contact from '../models/Contact.js';

export const createContact = async (req, res) => {

    try{
        const {name, email, website, message} = req.body;

        const contact = await Contact.create ({name, email, website, message});    

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