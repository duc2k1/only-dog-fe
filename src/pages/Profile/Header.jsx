import React, { memo, useState, useContext } from "react";
import ButtonFollow from "../../components/ButtonFollow";
import ModalImage from "../../components/ModalImage";
import Placeholder from "../../components/Placeholder";
import avatar from "../../assets/images/avatarDefault.png";
import { formatDate } from "../../helpers/commonFunctions";
import { AppContext } from "../../contexts/AppProvider";
import dataUser from "../../seeds/dataUser.json";
//--------------------------------------------------
export default memo(function Header() {
  const [loaded, setLoaded] = useState(false);
  const [avatarUser, setAvatarUser] = useState(avatar);
  const { stateDataUser } = useContext(AppContext);
  const [postsOfUser, setPostsOfUser] = useState(stateDataUser.user.posts);
  const [followersOfUser, setFollowersOfUser] = useState(
    stateDataUser.user.followers
  );
  const [followingOfUser, setFollowingOfUser] = useState(
    stateDataUser.user.following
  );
  const [createdAtOfUser, setCreatedAtOfUser] = useState(
    formatDate(stateDataUser.user.createdAt)
  );
  //--------------------------------------------------
  return (
    <div>
      <div className="row p-5">
        <div className="col-md-4 text-center">
          <ModalImage
            component={
              <>
                <img
                  src={avatarUser}
                  alt=""
                  width="200"
                  height="200"
                  role="button"
                  style={{ objectFit: "cover", userSelect: "none" }}
                  onLoad={() => setLoaded(true)}
                  className={loaded ? "rounded-circle" : "d-none"}
                />
                {!loaded && (
                  <Placeholder rounded={true} width={200} height={200} />
                )}
              </>
            }
          />
        </div>
        <div className="col-md-8" style={{ marginTop: 30 }}>
          <h3 className="text-center mb-2">{stateDataUser.user.userName}</h3>
          <div className="d-flex justify-content-around mb-2">
            <p className="me-3">
              <b>{postsOfUser.length}</b> posts
            </p>
            <p className="me-3">
              <b>{followersOfUser.length}</b> followers
            </p>
            <p className="me-3">
              <b>{followingOfUser.length}</b> following
            </p>
          </div>
          <div className="text-center mb-2">Join date: {createdAtOfUser}</div>
          <div className="text-center">
            <ButtonFollow />
          </div>
        </div>
      </div>
    </div>
  );
});
