import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            sparse: true,
            required: false,
            trim: true,
            validate: {
                validator: function (email) {
                    if (email === null) {
                        return true;
                    }
                    return /^(?!.*\.\.)(?!^\.)[a-z0-9]+(?:\.[a-z0-9]+)*@[a-z]{5,}\.[a-z]{2,}$/i.test(
                        email
                    );
                },
                message: 'Invalid Email',
            },
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        registeredAt: {
            type: Date,
            default: Date.now,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const AdminModel = mongoose.model('admin', adminSchema);

export { AdminModel };
