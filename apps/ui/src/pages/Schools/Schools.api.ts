import { axiosInstance } from "@/utils/axiosConfig";
import { useMutation } from "@tanstack/react-query";

export const useOnboardingSchools = ()=> {
    return useMutation({
        mutationFn: async (data: Record<string, any>) => {
            const response = await axiosInstance.post('/api/v1/onboarding/request', data);
            if (response.status !== 201) {
                throw new Error('Failed to create school');
            }
            return response.data;
        }
    });
};