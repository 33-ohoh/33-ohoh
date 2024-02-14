import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { createLog, deleteLog, updateLog } from "../../apis/log";
import type { Log, LogsResponse } from "../../types/log";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const useGetLogs = () => {
  const { data, error, isLoading } = useSWR<LogsResponse | null>(
    `${apiUrl}/logs/records`,
    // getLogs,
  );

  return {
    logs: data?.items || [],
    isLoading,
    isError: error,
  };
};

export const useGetLog = (id: string) => {
  const { data, error, isLoading } = useSWR<Log | null>(
    `${apiUrl}/logs/records/${id}`,
    // getLog,
  );

  return {
    log: data,
    isLoading,
    isError: error,
  };
};

export const useCreateLog = () => {
  const { data, isMutating, error, reset, trigger } = useSWRMutation(
    `${apiUrl}/logs/records`,
    createLog,
  );

  return {
    logs: data,
    isMutating,
    isError: error,
    reset,
    trigger,
  };
};

export const useUpdateLog = (id: string) => {
  const { data, isMutating, error, reset, trigger } = useSWRMutation(
    `${apiUrl}/logs/records/${id}`,
    updateLog,
  );

  return {
    logs: data,
    isMutating,
    isError: error,
    reset,
    trigger,
  };
};

export const useDeleteLog = (id: string) => {
  const { data, isMutating, error, reset, trigger } = useSWRMutation(
    `${apiUrl}/logs/records/${id}`,
    deleteLog,
  );

  return {
    logs: data,
    isMutating,
    isError: error,
    reset,
    trigger,
  };
};
