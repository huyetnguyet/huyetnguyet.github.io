import { useParams } from "react-router-dom";
/**import { useLocation } from "react-router-dom";*/
export default function View() {
  /**
  const { search } = useLocation();
  const match = search.match(/post=(.*)/);
  const view = match?.[1];
 
  console.log(view);
  */

  const { view } = useParams();
  console.log("view", view);
  return <></>;
}
