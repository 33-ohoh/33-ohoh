import PocketBase, { RecordModel } from "pocketbase";

const pb = new PocketBase("http://13.209.16.46:8090");

export const getFullLogList = async (
  collectionName: string,
  options: {
    sort?: string;
    expand?: string;
    filter?: string;
  },
): Promise<RecordModel[]> => {
  try {
    const resultList = await pb.collection(collectionName).getFullList({
      sort: options.sort || "-created",
      expand: options.expand || "",
      filter: options.filter || "",
    });
    return resultList;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getLogList = async (
  collectionName: string,
  page: number,
  perPage: number,
  options: {
    sort?: string;
    expand?: string;
    filter?: string;
    page?: number;
    perPage?: number;
  },
) => {
  try {
    const resultList = await pb
      .collection(collectionName)
      .getList(page, perPage, {
        sort: options.sort || "-created",
        expand: options.expand || "",
        filter: options.filter || "",
      });
    return resultList;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
