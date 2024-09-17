import subbase from "./supabase";

export async function getVideos() {
  let { data: videos, error } = await subbase.from("videos").select("*");

  if (error) {
    console.error(error);
    throw new Error("ویدیو ها دریافت نشد");
  }

  return videos;
}
