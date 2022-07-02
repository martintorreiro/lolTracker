import { OpenMatchPlayers } from "./openMatchPlayers";

export const OpenMatchModal = ({ closeModal, match }) => {
  return (
    <article className="modal ">
      <div className="modal_container">
        <button className="modal_close" onClick={() => closeModal()}>
          X
        </button>
        <OpenMatchPlayers
          participants={match.info.participants}
        ></OpenMatchPlayers>
      </div>
    </article>
  );
};
