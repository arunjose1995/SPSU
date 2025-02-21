import { axiosInstance } from "@/utils/axiosConfig";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useOnboardingSchools = ()=> {
    return useMutation({
        mutationFn: async (data: Record<string, any>) => {
            const response = await axiosInstance.post('/api/v1/onboarding/request', data);
            if (response.status !== 200) {
                throw new Error('Failed to create school');
            }
            return response.data;
        }
    });
};

export const useFetchOnboardingRequest = () => {
    return useQuery({
      queryKey: ["onboardingRequests"],
      queryFn: async () => {
        const response = await axiosInstance.post("/api/v1/onboarding/request/list");
        return response.data.responseObj.responseDataParams.data;  
      },
    });
  };
  
  export const useApproveRequest = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: Record<string, any>) => {
            const response = await axiosInstance.put('/api/v1/onboarding/request/approve', data);
            if (response.status !== 200) {
                throw new Error('Failed to approve the request');
            }
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["onboardingRequests"] }); // Refetch the onboarding requests
        }
    });
};