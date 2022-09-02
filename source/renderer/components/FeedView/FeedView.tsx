/* eslint-disable max-params */
import { useHookstate } from "@hookstate/core";
import { useQuery } from "react-query";

const FeedView = () => {
  const shouldFetchState = useHookstate(true);
  const activitiesState = useHookstate([] as { title: string }[]);
  const { data } = useQuery(["getFeed"], {
    enabled: shouldFetchState.get(),
  });
  console.log(data);
  return (
    <div>
      {activitiesState.map((activity, index) => {
        return <div key={`activity-${index}`}>{activity.get().title}</div>;
      })}
    </div>
  );
};
export default FeedView;
