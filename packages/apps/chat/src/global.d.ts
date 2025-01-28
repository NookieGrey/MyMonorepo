interface Window {
  definedApps: Record<
    string,
    { appName: string; initialized: false; init: (url: string) => () => void }
  >;
  currentTemplateType: string;
}
