export const API = {
  GUIDES: "/api/guides",
  DELETE_GUIDE: (id: string) => `/api/guides/${id}`,
};

export const ACTIONS = {
  OK: "U redu",
  CANCEL: "Odustani",
};

export const TEXT = {
  DELETE_GUIDE_QUESTION: `Da li zaista zelite da obrisete vodica?`,
  NO_GUIDES_FOUND: `Lista vodica je trenutno prazna`,
  GUIDE_DELETED: `Vodic je uspesno obrisan`,
  GUIDE_NOT_DELETED: `Doslo je do greske prilikom brisanja vodica`,
};
