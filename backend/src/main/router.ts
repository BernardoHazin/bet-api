export interface RouteOption {
  path: string;
  controller: string;
  method: string;
  validator?: string;
}

export interface Router {
  build: (routes: Record<string, RouteOption>) => void;
}
