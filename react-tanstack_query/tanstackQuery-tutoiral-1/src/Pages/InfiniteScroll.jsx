import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchUsers } from "../API/api";
import { InView, useInView } from "react-intersection-observer";

const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage || false;
      },
    });

  //   const handleScroll = () => {
  //     const bottom =
  //       window.innerHeight + window.scrollY >=
  //       document.documentElement.scrollHeight - 1;

  //     if (bottom && hasNextPage) {
  //       fetchNextPage();
  //     }
  //   };

  // for the alternative of above code we will use npm  "react-intersection-observer":

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);

    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className="flex flex-col justify-center items-center bg-amber-200">
      {data?.pages?.map((page, index) => (
        <ul key={index}>
          {page.map((user) => (
            <li
              className="bg-amber-50 py-2 px-5 text-xl my-2 rounded-lg"
              key={user.id}
            >
              <p>{user.login}</p>
              <img
                className="rounded-b-full"
                src={user.avatar_url}
                alt={user.login}
                width={80}
                height={80}
              />
            </li>
          ))}
        </ul>
      ))}
      <div
        ref={ref}
        className="text-2xl flex justify-between align-middle text-center"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "scroll down to load more "
          : " no more users "}
      </div>
    </div>
  );
};

export default InfiniteScroll;
