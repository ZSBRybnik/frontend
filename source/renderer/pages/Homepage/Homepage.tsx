/* eslint-disable max-params */
import { useHookstate } from "@hookstate/core";
import { FunctionComponent, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useQuery } from "../../components/AppProvider/AppProvider";

const Homepage: FunctionComponent = () => {
  const shouldFetchState = useHookstate(true);
  const lastIdState = useHookstate(18);
  const postsState = useHookstate([] as { title: string }[]);
  const { data } = useQuery(
    ["getPosts", { range: 1, startId: lastIdState.get() }],
    {
      enabled: shouldFetchState.get(),
    },
  );
  useEffect(() => {
    if (data) {
      postsState.merge(data);
      const lastId = data.at(-1)?.id;
      lastId && lastIdState.set(lastId + 1);
    }
  }, [data]);
  console.log(data);
  return (
    <div>
      {postsState.map((post, index) => {
        return <div key={`post-${index}`}>{post.get().title}</div>;
      })}
      <VisibilitySensor
        onChange={(isVisible: boolean) => {
          shouldFetchState.set(isVisible);
          console.log(isVisible);
        }}
      >
        <div>123</div>
      </VisibilitySensor>
    </div>
  );
};

export default Homepage;
