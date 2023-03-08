function call(callbackURI: string) {
  (window as any).authenticateCallback = (token: string) => {
    localStorage.setItem("token", token);
    window.location.reload();
  };
  window.open(callbackURI, "_blank", "width=500, height=600");
}

export const useOauth = () => {
  return { call };
};
