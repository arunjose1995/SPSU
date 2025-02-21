import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

export const useFetchStaffProfiles = () => {
    return useQuery({
      queryKey: ["fetchStaff"],
      queryFn: async () => {
        const response = await axiosInstance.post("api/v1/staff/profile");
        return response.data.responseObj.responseDataParams.data;  
      },
    });
  };