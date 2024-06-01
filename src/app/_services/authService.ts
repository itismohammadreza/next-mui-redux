import { getState } from "@redux/store/rootStore";
import { redirect } from "next/navigation";

const hasPermission = (input: string[] | string) => {
  if (!input || !input.length) {
    return true
  }
  const userPermissions = getState().user.permissions;
  if (Array.isArray(input)) {
    return userPermissions?.some(p => input.includes(p))
  }
  return userPermissions?.includes(input)
}

const logout = () => {
  localStorage.removeItem('token');
  redirect('/auth/login')
}

const hasToken = () => {
  return !!localStorage.getItem('token');
}

export const authService = {
  hasPermission,
  logout,
  hasToken
}
