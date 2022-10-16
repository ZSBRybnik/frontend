/* eslint-disable max-params */
import useState from "~frontend/source/renderer/hooks/useState/useState";
import { useQuery } from "react-query";

type Activities = {
  title: string;
};

const FeedView = () => {
  const { value: shouldFetch } = useState<{ value: boolean }>({ value: true });
  const { value: activities } = useState<{ value: Activities[] }>({
    value: [],
  });
  const { data } = useQuery(["getFeed"], {
    enabled: shouldFetch,
  });
  console.log(data);
  return (
    <>
      {activities.map((activity, index) => {
        return <div key={`activity-${index}`}>{activity.title}</div>;
      })}
    </>
  );
};
export default FeedView;
