

import api from "../lib/api";
import {
  ApplyApplicationPayload,
  ApplicationResponse,
  ApplicationsResponse,
  StatusResponse,
  UpdateApplicationStatusPayload,
  MessageResponse,
} from "../types/application.types";


export const applyApplication = async (
  payload: ApplyApplicationPayload
): Promise<ApplicationResponse> => {
  const res = await api.post<ApplicationResponse>(
    "/application/apply",
    payload
  );
  return res.data;
};


export const getFilledApplication = async (): Promise<ApplicationResponse> => {
  const res = await api.get<ApplicationResponse>(
    "/application/filled"
  );
  return res.data;
};


export const getApplicationStatus = async (): Promise<StatusResponse> => {
  const res = await api.get<StatusResponse>(
    "/application/status"
  );
  return res.data;
};


export const withdrawApplication = async (): Promise<MessageResponse> => {
  const res = await api.delete<MessageResponse>(
    "/application/withdraw"
  );
  return res.data;
};


export const getAllApplications = async (): Promise<ApplicationsResponse> => {
  const res = await api.get<ApplicationsResponse>(
    "/application/all"
  );
  return res.data;
};


export const updateApplicationStatus = async (
  payload: UpdateApplicationStatusPayload
): Promise<ApplicationResponse> => {
  const res = await api.put<ApplicationResponse>(
    "/application/update",
    payload
  );
  return res.data;
};
