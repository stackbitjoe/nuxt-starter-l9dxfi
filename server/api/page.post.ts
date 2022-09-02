import { urlToContent } from '~/utils/content';

export default defineEventHandler(async (event) => {
  const body = await useBody<string>(event);

  const page: any = urlToContent(body);

  console.log(page);
  return page;
});
