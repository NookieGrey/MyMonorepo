interface Window {
  definedApps: Record<
    string,
    { appName: string; initialized: false; init: () => () => void }
  >;
  currentTemplateType: string;
}
