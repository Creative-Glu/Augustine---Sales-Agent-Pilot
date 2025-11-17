import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createICP, deleteICPs, getICPs } from './icps.service';

export const useGetICPs = () =>
  useQuery({
    queryKey: ['icps'],
    queryFn: () => getICPs(),
  });

export function useCreateICPs() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createICP,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['icps'] }),
  });
}

export function useDeleteICPs() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteICPs,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['icps'] }),
  });
}
