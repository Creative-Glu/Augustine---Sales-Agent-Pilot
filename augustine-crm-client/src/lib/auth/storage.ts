import { STORAGE_KEYS } from '../constants/storageKeys';

export function getStoredUsers(): Array<{
  email: string;
  password: string;
  id: string;
  createdAt: string;
}> {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.USERS);
  return stored ? JSON.parse(stored) : [];
}

export function saveUsers(
  users: Array<{ email: string; password: string; id: string; createdAt: string }>
): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}
