'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { createCompaign, deleteCompaign, getCompaign } from './campaign.service';

export const useGetCompaign = () => {
  return useQuery({
    queryKey: ['compaign'],
    queryFn: getCompaign,
  });
};

export const useCreateCompaign = () => {
  return useMutation({
    mutationKey: ['create-compaign'],
    mutationFn: createCompaign,
  });
};

export const useDeleteCompaign = () => {
  return useMutation({
    mutationKey: ['delete-compaign'],
    mutationFn: deleteCompaign,
  });
};
