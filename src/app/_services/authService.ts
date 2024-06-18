import { getState } from "@redux/store/rootStore";
import { redirect } from "next/navigation";
import { cookieService } from "@utils/coockieService";

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
  cookieService.del('token');
  redirect('/auth/login')
}

const hasToken = () => {
  return !!cookieService.get('token');
}

export const authService = {
  hasPermission,
  logout,
  hasToken
}
