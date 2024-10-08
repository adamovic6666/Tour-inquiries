import GuidesList from "@/app/_components/guides/GuidesList";
import { API } from "@/app/_constants";

const GuidesPage = async () => {
  // GET ALL GUIDES
  const response = await fetch(process.env.STRAPI_BASE_URL + API.GUIDES);
  const { data: guides } = await response.json();

  return <GuidesList guides={guides} />;
};

export default GuidesPage;
