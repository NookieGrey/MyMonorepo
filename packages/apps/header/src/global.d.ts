interface Window {
  definedApps: Record<
    string,
    {
      appName: string;
      initialized: false;
      init: (location: string) => () => void;
    }
  >;
  currentTemplateType: string;
}
