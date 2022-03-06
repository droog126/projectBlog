import Data from "@/data";
const { setData, getData } = Data;
export default async (req: any) => {
  console.log("统计下页面的pv", req);
  const { path, type } = req.data;
  try {
    const pv = await getData({ key: "pv", path: `.${path}` });
    console.log(pv);
    await setData({ key: "pv", path: `.${path}`, data: pv + 1 });
  } catch (error) {
    await setData({ key: "pv", path: `.${path}`, data: 1 });
  }
};
