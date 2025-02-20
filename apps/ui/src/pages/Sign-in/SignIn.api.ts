import { axiosInstance } from '@/utils/axiosConfig';

interface Credentials {
    username: string;
    password: string;
}

interface LoginResponse {
    result: string;
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

export const useUserAuthentication = async (credentials: { email: string; password: string }): Promise<LoginResponse> => {
    const response = await axiosInstance.post<LoginResponse>("/api/v1/admin/login", credentials);
    if (response.status !== 200) {
      throw new Error("Login failed");
    }
    
    return response.data;
  };
  