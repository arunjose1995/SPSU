import mongoose from 'mongoose';

const onboardingRequestSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        schoolId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        onboardingStatus: {
            type: String,
            required: true,
            trim: true,
            enum: ['requested', 'initiated', 'onboarded'],
            default: 'requested',
        },
    },
    { timestamps: true }
);

const OnboardingRequestModel = mongoose.model('onboarding-request', onboardingRequestSchema);

export { OnboardingRequestModel };
