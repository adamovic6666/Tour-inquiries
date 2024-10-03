export const API = {
  GUIDES: "/api/guides",
  DELETE_GUIDE: (id: string) => `/api/guides/${id}`,
};

export const ACTIONS = {
  OK: "OK",
  CANCEL: "CANCEL",
};

export const TEXT = {
  DELETE_GUIDE: `Da li zaista zelite da obrisete vodica:`,
  NO_GUIDES_FOUND: `Lista vodica je trenutno prazna`,
};
