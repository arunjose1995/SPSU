import { axiosInstance } from '@/utils/axiosConfig';

export interface Credentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    result: string;
    responseObj: {
      responseDataParams: {
        data: {
          email: string;
          password: string;
          isAdmin: boolean;
          token: string;
        };
      };
    };
  }
  
export const useUserAuthentication = async (credentials: { email: string; password: string }): Promise<LoginResponse> => {
    const response = await axiosInstance.post<LoginResponse>("/api/v1/admin/login", credentials);
    if (response.status !== 200) {
      throw new Error("Login failed");
    }
    
    return response.data;
  };
  