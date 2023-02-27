function call() {
  (window as any).authenticateCallback = (token: string) => {
    localStorage.setItem("token", token);
    window.location.reload();
  };
  window.open(
    `http://localhost:3030/api/v1/auth/github`,
    "_blank",
    "width=500, height=600"
  );
}

export const useOauth = () => {
  return { call };
};
