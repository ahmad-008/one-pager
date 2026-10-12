import crypto from 'crypto';
import sendEmail from '../config/sendEmail.js';
import User from '../models/User.js';
import generateToken from '../config/generateToken.js';



export const signup = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'An account with this email already exists',
            });


        }


        const user = await User.create({ name, email, password });

        res.status(201).json({
            success: true,
            message: 'Account created successfully',
            token: generateToken(user._id),

            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });



    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }



};

export const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
            });

        }

        const user = await User.findOne({ email });

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            token: generateToken(user._id),
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },

        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })

    }


};

export const getMe = async (req, res) => {

    res.status(200).json({
        success: true,
        data: req.user,
    });

};

export const forgotPassword = async (req, res) => {

    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(200).json({

                success: true,
                message: 'if that email exists, a reset link has been sent',

            });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

        await user.save();

        const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

        try {
            await sendEmail({
                to: user.email,
                subject: 'Password Reset Request',
                html: `
                <p>You requested a Password reset.</p>
                <p>Click <a href= "${resetUrl}">here</a> to reset your password. This link expires in 30 minutes.</p>
                <p>If you did not request this, ignore this email.</p>,
            `


            });

            res.status(200).json({
                success: true,
                message: 'If that email exists, a reset link has been sent',


            });


        } catch (emailError) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();

            res.status(500).json({
                success: false,
                message: 'Email could not be sent',
            });

        }



    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

export const resetPassword = async (req, res) => {

    try {
        const {token} = req.params;
        const {password} = req.body;

        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: {$gt: Date.now()},
        });

        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'Invalid or expired reset token',
            });
        }

        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({
            success: true,
            message: 'Password reset successfully',
            token: generateToken(user._id),
            data:{
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }



};