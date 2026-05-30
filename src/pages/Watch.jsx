import { useParams } from "react-router-dom";
import Player from "../components/Player";

export default function Watch() {
  const { id } = useParams();

  return (
    <div>
      <Player id={id} />
    </div>
  );
}
