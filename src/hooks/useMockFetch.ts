let userDataPromise: Promise<
  { name: string; email: string; created: string }[]
> | null = null;
let userDataCache: { name: string; email: string; created: string }[] | null =
  null;

export const useMockFetch = (url: string, delay = 2000) => {
  if (userDataCache) return userDataCache; // Return cached data

  if (!userDataPromise) {
    userDataPromise = new Promise((resolve) => {
      setTimeout(() => {
        import("../mocks/userdata.json").then((module) => {
          userDataCache = module.default;
          resolve(userDataCache);
        });
      }, delay);
    });
  }

  throw userDataPromise;
};
