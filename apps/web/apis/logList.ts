import PocketBase, { ListResult, RecordModel } from "pocketbase";

const pb = new PocketBase("http://13.209.16.46:8090");

interface FetchOptions {
  sort?: string;
  expand?: string;
  filter?: string;
  page?: number;
  perPage?: number;
}

export const getFullLogList = async (
  collectionName: string,
  options: FetchOptions = {},
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
  options: FetchOptions = {},
): Promise<ListResult<RecordModel>> => {
  try {
    const { page = 1, perPage = 30, ...rest } = options;
    const resultList = await pb
      .collection(collectionName)
      .getList(page, perPage, {
        sort: rest.sort || "-created",
        expand: rest.expand || "",
        filter: rest.filter || "",
      });
    return resultList;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
