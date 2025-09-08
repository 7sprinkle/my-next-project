import { getCategoryDitail, getNewsList } from "../../../_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "../../../_componets/NewsList";
import Pagination from "../../../_componets/Pagination";
import Category from "../../../_componets/Category";
import { NEWS_LIST_LIMIT } from "../../../_constants";

type Props = {
  params: {
    id: string;
  }
}

export default async function Page({ params }: Props) {
  const category = await getCategoryDitail(params.id).catch(notFound)
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  })
  return (
    <>
      <p>
        <Category category={category} />の一覧
      </p>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} basePath={`/news/category/${category.id}`} />
    </>
  )
}